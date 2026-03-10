import React, { useState } from 'react'
import { useTodo } from './store/Todo'
import { useFormik } from 'formik'
import { Button, Input, Modal, Select } from "antd"
import { Option } from 'antd/es/mentions'
import delet from './assets/delete.svg'
import edit from './assets/edit.svg'



const App = () => {
  const { users, deleteUser, editUser, addUser } = useTodo()
  let [idx, setIdx] = useState(null)
  let [search, setSearch] = useState("")
  let [select, setSelect] = useState("")
  const { handleChange, handleSubmit, resetForm, setFieldValue, values } = useFormik({
    initialValues:
    {
      name: "",
      age: 0,
      avatar: ""
    },
    onSubmit: (value) => {
      if (idx) {
        addUser({
          id: Date.now(),
          name: value.name,
          age: value.age,
          avatar: value.avatar
        })
        resetForm()
        handleCancelEdit()
      }
      else {

        editUser({ id: idx, ...value })
        resetForm()
        handleCancel()
        addUser({
          name: value.name,
          age: value.age,
          avatar: value.avatar
        })
        resetForm()
        handleCancelEdit()
      }
    }
  })

  const handleEdit = (user) => {
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
        <input className=' h-[30px] border rounded-[5px] pl-[20px]' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' />
        <Select value={select}
          onChange={(value) => setSelect(value)}
          style={{ width: 120 }}
          placeholder="Select status" >
          <Option value="">All</Option>
          <Option value="true">Active</Option>
          <Option value="false">Inactive</Option>
        </Select>
      </div>
   
      <table className='w-[80%] m-auto border-collapse text-left '>
        <thead>
          <tr className='border-[1px] border-solid border-[#cccccc]'>
            <th className='p-[20px]'>#</th>
            <th className='p-[20px]'>Name</th>
            <th className='p-[20px]'>Age</th>
            <th className='p-[20px]'>Status</th>
            <th className='p-[20px]'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.filter((user) => {
              if (select == "") return true
              else if (select == "true") return user.status
              else return !user.status
            }).filter((e) => e.name.toLowerCase().includes(search.toLowerCase())).map((user) => {
              return <tr className='border-[1px] border-solid border-[#cccccc]'>
                <td className='p-[20px]' >{user.id}</td>
                <td className='p-[20px]'>
                  <div className='flex gap-[10px]'>
                    <img src={user.avatar} className='w-[60px] h-[60px] rounded-[50%] ' alt="" />
                    <h1 className='text-[20px] mt-[10px]'>{user.name}</h1>
                  </div>
                </td>
                <td className='p-[20px]'>{user.age}</td>
                <td className='p-[20px]'>
                  {user.status && (
                    <p className='text-[green]'>Active</p>
                  )
                  }
                  {!user.status && (
                    <p className='text-[red]'>Inactive</p>
                  )
                  }
                </td>
                <td className='p-[20px]'>
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
      >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange} placeholder="Name" />
          <Input name='avatar' value={values.avatar} onChange={handleChange} placeholder="Image" />
          <Input name='age' value={values.age} onChange={handleChange} placeholder="Age" />
          <button>Save</button>
        </form>
      </Modal>



      <Modal
        title="Edit User"
        closable={{ 'aria-label': 'Custom Close Button' }}
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

export default App