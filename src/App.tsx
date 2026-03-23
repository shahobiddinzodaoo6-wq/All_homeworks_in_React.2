import { useEffect, useState } from 'react'
import { useTodo, type IUser } from './store/Todo'
import { useForm } from "react-hook-form"
import { Button, Modal, Select, Switch, Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import { CheckOutlined, CloseOutlined } from "@ant-design/icons"

import delet from './assets/delete.svg'
import edit from './assets/edit.svg'

type FormData = {
  name: string
  age: number
  avatar: string
}

const App = () => {
  const { users, getData, deleteUser, addUser, editUser, selectData, searchData } = useTodo()

  useEffect(() => {
    getData()
  }, [])

  let [idx, setIdx] = useState<number | null>(null)

  const { register, handleSubmit, reset, setValue } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    if (!idx) {
      addUser({
        id: Date.now(),
        name: data.name,
        age: data.age,
        avatar: data.avatar,
        status: false
      })
      reset()
      handleCancel()
    } else {
      editUser({
        id: idx,
        status: false,
        ...data
      })
      handleCancelEdit()
    }
  }

  const handleEdit = (user: IUser) => {
    setIdx(user.id)
    setValue("name", user.name)
    setValue("age", user.age)
    setValue("avatar", user.avatar)
  }

  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleCancel = () => setAddModal(false)
  const handleCancelEdit = () => setEditModal(false)


  
  
  const columns: ColumnsType<IUser> = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
      render: (_, user) => (
        <div className="flex gap-[10px] items-center">
          <img src={user.avatar} className="w-[40px] h-[40px] rounded-full" />
          {user.name}
        </div>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Status",
      key: "status",
      render: (_, user) =>
        user.status
          ? <p className="text-green-500">Active</p>
          : <p className="text-red-500">Inactive</p>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, user) => (
        <div className="flex gap-[10px] items-center">
          <img onClick={() => deleteUser(user.id)} src={delet} />

          <img onClick={() => {
            handleEdit(user)
            setEditModal(true)
          }} src={edit} />

          <Switch
            checked={user.status}
            onChange={() => editUser({ ...user, status: !user.status })}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </div>
      ),
    },
  ]

  return (
    <div className='max-w-[1400px] m-auto mt-[100px]'>

      <div className='flex gap-[40px] mb-[50px]'>
        <Button onClick={() => setAddModal(true)}>Add User</Button>

        <input
          onChange={(e) => searchData(e.target.value)}
          placeholder='Search...'
          className='h-[31px] border border-gray-300 rounded-[5px] pl-[20px]'
        />

        <Select
          style={{ width: 120 }}
          onChange={(value) => selectData(value)}
          options={[
            { value: "all", label: "All" },
            { value: "true", label: "Active" },
            { value: "false", label: "Inactive" },
          ]}
        />
      </div>


      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
      />


      <Modal open={addModal} onCancel={handleCancel} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[15px]">

          <input
            {...register("name")}
            placeholder="Name"
            className="border border-gray-300 rounded-[6px] p-[10px] outline-blue-500"
          />

          <input
            {...register("avatar")}
            placeholder="Avatar"
            className="border border-gray-300 rounded-[6px] p-[10px] outline-blue-500"
          />

          <input
            {...register("age")}
            placeholder="Age"
            type="number"
            className="border border-gray-300 rounded-[6px] p-[10px] outline-blue-500"
          />

          <button className="bg-blue-500 text-white p-[10px] rounded-[6px]">
            Save
          </button>

        </form>
      </Modal>




      <Modal open={editModal} onCancel={handleCancelEdit} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[15px]">

          <input
            {...register("name")}
            placeholder="Name"
            className="border border-gray-300 rounded-[6px] p-[10px] outline-blue-500"
          />

          <input
            {...register("avatar")}
            placeholder="Avatar"
            className="border border-gray-300 rounded-[6px] p-[10px] outline-blue-500"
          />

          <input
            {...register("age")}
            placeholder="Age"
            type="number"
            className="border border-gray-300 rounded-[6px] p-[10px] outline-blue-500"
          />

          <button className="bg-blue-500 text-white p-[10px] rounded-[6px]">
            Save
          </button>

        </form>
      </Modal>
    </div>
  )
}

export default App