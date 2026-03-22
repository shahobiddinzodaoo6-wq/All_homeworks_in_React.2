import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, DeleteUser, editUser, GetData, searchData, selectData, type IData } from '../store/counter'
import edit from '../assets/edit.svg'
import delet from '../assets/delete.svg'
import { Button, Input, Modal, Table } from 'antd'
import type { AppDispatch, RootState } from '../store/store'
import type { ColumnsType } from 'antd/es/table'

const AsyncRedux = () => {
  const { users } = useSelector((store: RootState) => store.counter)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(GetData())
  }, [dispatch])

  let [idx, setIdx] = useState<string | null>(null)

  const { setFieldValue, handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      name: "",
      age: 0,
      avatar: ""
    },
    onSubmit: (value) => {
      if (!idx) {
        dispatch(addUser({
          id: Date.now().toString(),
          name: value.name,
          age: value.age,
          avatar: value.avatar,
          status: false
        }))
        handleCancel()
        resetForm()
      } else {
        dispatch(editUser({
          id: idx,
          name: value.name,
          age: value.age,
          avatar: value.avatar,
          status: false
        }))
        handleCancelEdit()
      }
    }
  })

  function handleEdit(user: IData) {
    setIdx(user.id)
    setFieldValue("name", user.name)
    setFieldValue("age", user.age)
    setFieldValue("avatar", user.avatar)
  }

  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const showModal = () => setAddModal(true)
  const handleCancel = () => setAddModal(false)

  const showModalEdit = () => setEditModal(true)
  const handleCancelEdit = () => setEditModal(false)


  const columns: ColumnsType<IData> = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      render: (_, user) => (
        <div className='flex gap-[10px]'>
          <img src={user.avatar} className='w-[55px] h-[55px] rounded-[50%]' />
          <h1 className='text-[20px] mt-[10px]'>{user.name}</h1>
        </div>
      )
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Status',
      render: (_, user) =>
        user.status
          ? <p className='text-[green]'>Active</p>
          : <p className='text-[red]'>Inactive</p>
    },
    {
      title: 'Actions',
      render: (_, user) => (
        <div className='flex gap-[10px]'>
          <img src={delet} onClick={() => dispatch(DeleteUser(user.id))} />
          <img src={edit} onClick={() => {
            handleEdit(user)
            showModalEdit()
          }} />
          <input
            type="checkbox"
            className='w-[23px] h-[23px]'
            checked={user.status}
            onChange={() => dispatch(editUser({ ...user, status: !user.status }))}
          />
        </div>
      )
    }
  ]

  return (
    <div className='mt-[100px]'>
      <div className='flex justify-around mb-[30px] gap-[350px] '>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>

        <div className='flex gap-[20px]'>
          <input
            onChange={(e) => dispatch(searchData(e.target.value))}
            className='w-[300px] h-[43px] rounded-[10px] border-[1px] border-solid border-[lightgrey] pl-[20px]'
            type="text"
            placeholder='Search...'
          />
          <select
            className='w-[110px] h-[43px] rounded-[10px] border-[1px] border-solid border-[lightgrey]'
            onChange={(e) => dispatch(selectData(e.target.value))}
          >
            <option value="all">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </div>

      {/* ✅ ЗАМЕНЕННАЯ ТАБЛИЦА */}
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
      />

      <Modal
        title="Add User"
        open={addModal}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange} placeholder="Name" />
          <Input name='avatar' value={values.avatar} onChange={handleChange} placeholder="Image" />
          <Input name='age' value={values.age} onChange={handleChange} placeholder="Age" />
          <button type='submit'>Save</button>
        </form>
      </Modal>

      <Modal
        title="Edit User"
        open={editModal}
        onCancel={handleCancelEdit}
      >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange} placeholder="Name" />
          <Input name='avatar' value={values.avatar} onChange={handleChange} placeholder="Image" />
          <Input name='age' value={values.age} onChange={handleChange} placeholder="Age" />
          <button type='submit'>Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default AsyncRedux