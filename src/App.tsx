import  { useEffect, useState } from 'react'
import { useTodo, type IUser } from './store/Todo'
import { useFormik } from 'formik'
import { Button, Input, Modal, Select } from "antd"

import delet from './assets/delete.svg'
import edit from './assets/edit.svg'

type User = {
  id: number;
  name: string;
  age: number;
  avatar: string;
  status: boolean;
};

type TodoStore = {
  users: User[];
  getData: () => void;
  deleteUser: (id: number) => void;
  addUser: (user: User) => void;
  editUser: (user: User) => void;
  selectData: (value: "all" | "true" | "false") => void;
  searchData: (value: string) => void;
};



const App = () => {
  const { users, getData, deleteUser, addUser, editUser, selectData, searchData } = useTodo() as TodoStore;

  useEffect(() => {
    getData()
  }, [])

  let [idx, setIdx] = useState<number | null>(null)

  const { handleChange, handleSubmit, resetForm, setFieldValue, values } = useFormik({
    initialValues:
    {
      name: "",
      age: 0,
      avatar: ""
    },
    onSubmit: (value) => {
      if (!idx) {
        addUser({
          id: Date.now(),
          name: value.name,
          age: value.age,
          avatar: value.avatar,
          status: false
        })
        resetForm()
        handleCancel()
      }
      else {
        editUser({
          id: idx,
          status: false,
          ...value
        })
        handleCancelEdit()
      }
    }
  })

  const handleEdit = (user:IUser) => {
    setIdx(user.id),
      setFieldValue("name", user.name),
      setFieldValue("age", user.age)
    setFieldValue("avatar", user.avatar)
  }


  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const showModal = () => {
    setAddModal(true);
  };

  const handleCancel = () => {
    setAddModal(false);
  };

  const showModalEdit = () => {
    setEditModal(true);
  };

  const handleCancelEdit = () => {
    setEditModal(false);
  };
  return (
    <div className='max-w-[1400px] m-auto mt-[100px]'>
      <div className='flex gap-[40px]  mb-[50px]'>
        <Button className='ml-[170px]' type='primary' onClick={showModal}>Add New User</Button>
        <input onChange={(e) => searchData(e.target.value)} className=' h-[31px] border-[1px] border-solid border-gray-300 outline-blue-400 rounded-[5px] pl-[20px]' type="text" placeholder='Search...' />
        <Select
          style={{ width: 120 }}
          placeholder="Select status"
          onChange={(value: "all" | "true" | "false") => selectData(value)}
          options={[
            { value: "all", label: "All" },
            { value: "true", label: "Active" },
            { value: "false", label: "Inactive" },
          ]} />


      </div>

      <table className='w-[80%] m-auto border-collapse text-left '>
        <thead>
          <tr className='border-[1px] border-solid border-[#cccccc] bg-gray-200  '>
            <th className='p-[20px]'>#</th>
            <th className='p-[20px]'>Name</th>
            <th className='p-[20px]'>Age</th>
            <th className='p-[20px]'>Status</th>
            <th className='p-[20px]'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return <tr className='border-[1px] border-solid border-[#cccccc]'>
                <td className='p-[20px]' >{user.id}</td>
                <td className='p-[10px]'>
                  <div className='flex gap-[10px]'>
                    <img src={user.avatar} className='w-[60px] h-[60px] rounded-[50%] ' alt="" />
                    <h1 className='text-[20px] mt-[10px]'>{user.name}</h1>
                  </div>
                </td>
                <td className='p-[10px]'>{user.age}</td>
                <td className='p-[10px]'>
                  {user.status && (
                    <p className='text-[green]'>Active</p>
                  )
                  }
                  {!user.status && (
                    <p className='text-[red]'>Inactive</p>
                  )
                  }
                </td>
                <td className='p-[10px]'>
                  <div className='flex gap-[20px]'>
                    <img onClick={() => deleteUser(user.id)} src={delet} alt="" />
                    <img src={edit} onClick={() => { showModalEdit(), handleEdit(user) }} alt="" />
                    <input onClick={() => editUser({ ...user, status: !user.status })} checked={user.status} type="checkbox" className='w-[23px] h-[23px]' />
                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>


      <Modal
        title="Edit User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={addModal}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange} placeholder="Name" />
          <Input name='avatar' value={values.avatar} onChange={handleChange} placeholder="Image" />
          <Input name='age' value={values.age} onChange={handleChange} placeholder="Age" />
          <button className='m-[10px]' type='submit'>Save</button>
        </form>
      </Modal>



      <Modal
        title="Edit User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={editModal}
        onCancel={handleCancelEdit}
        footer={null}
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

export default App