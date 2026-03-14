import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import edit from '../assets/edit.svg'
import delet from '../assets/trash (1).svg'
import { deletUser, addUser, editUser } from '../storeRedux/counter'
import { useFormik } from 'formik'
import { Button, Input, Modal } from 'antd'



interface IUser {
  id: number
  name: string
  age: number
  phone: number
  email: string
  avatar: string
  status: boolean
}


const ReduxToolkit = () => {
  const { users } = useSelector((store: any) => store.counter)
  const dispatch = useDispatch()

  let [idx, setIdx] = useState<number | null>(null)

  const { values, setFieldValue, handleChange, handleSubmit, resetForm } = useFormik(
    {
      initialValues: {
        name: "",
        age: 0,
        phone: 0,
        avatar: "",
        email: ""
      },
      onSubmit: (value) => {
        if (!idx) {
          dispatch(
            addUser({
              id: Date.now(),
              name: value.name,
              age: value.age,
              email: value.email,
              phone: value.phone,
              status: false,
              avatar: value.avatar
            })
          )
          handleCancel()
          resetForm()
        } else {
          dispatch(editUser({
            id: idx,
            status: false,
            ...value
          }))
          handleCancelEdit()

        }
      }
    }
  )
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("")



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


  function handleEdit(user: IUser) {
    setIdx(user.id)
    setFieldValue("name", user.name)
    setFieldValue("age", user.age)
    setFieldValue("avatar", user.avatar)
    setFieldValue("email", user.email)
    setFieldValue("phone", user.phone)
  }

  return (
    <>
      <div className='mt-[100px]'>
        <div className='flex justify-around mb-[30px] '>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <div className='flex gap-[20px]'>
            <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' />
            <select value={select} onChange={(e) => setSelect(e.target.value)} className='w-[110px] h-[43px] rounded-[7px] border-[1px] border-solid border-[#d4d4d4] outline-blue-300' >
              <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>
        <table className='w-[90%] m-auto text-left'>
          <thead>
            <tr className='border-[1px] border-solid border-[#c3c3c3] bg-[#e4e4e4]'>
              <th className='p-[12px]'>№</th>
              <th className='p-[12px]'>Name</th>
              <th className='p-[12px]'>Age</th>
              <th className='p-[12px]'>Phone</th>
              <th className='p-[12px]'>Status</th>
              <th className='p-[12px]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.filter((user: IUser) => user.name.toLowerCase().includes(search.toLowerCase())).filter((e: IUser) => e.status.toString().includes(select)).map((user:IUser) => {
                return <tr key={user.id} className='border-[1px] border-solid border-[#c3c3c3]'>
                  <td className='p-[12px]'>{user.id}</td>
                  <td className='p-[12px] flex gap-[10px]'>
                    <img src={user.avatar} className='w-[55px] h-[55px] rounded-[50%] ' alt="" />
                    <div>
                      <h1 className='text-[20px]'>{user.name}</h1>
                      <p className='text-[grey]'>{user.email}</p>
                    </div>
                  </td>
                  <td className='p-[12px]'>{user.age}</td>
                  <td className='p-[12px]'>{user.phone}</td>
                  <td className='p-[12px]'>
                    {user.status && (
                      <p className='text-[green] bg-[lightgreen]  pr-[7px] pl-[7px] rounded-[20px] w-[fit-content] '>Active</p>
                    )
                    }
                    {!user.status && (
                      <p className='text-[red] bg-[lightpink] pr-[7px] pl-[7px] rounded-[20px] w-[fit-content] '>Inactive</p>
                    )
                    }
                  </td>
                  <td className='p-[12px] flex gap-[10px]'>
                    <img src={delet} onClick={() => dispatch(deletUser(user.id))} className='w-[23px] h-[23px]' alt="" />
                    <img src={edit} onClick={() => {
                      showModalEdit()
                      handleEdit(user)
                    }} className='w-[23px] h-[23px]' alt="" />
                    <input checked={user.status} onClick={() => dispatch(editUser({ ...user, status: !user.status }))} type="checkbox" className='w-[23px] h-[23px]' />
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>


      <Modal
        title="Edit User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={addModal}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange} placeholder="Name..." />
          <Input name='avatar' value={values.avatar} onChange={handleChange} placeholder="Image..." />
          <Input name='age' value={values.age} onChange={handleChange} placeholder="Age..." />
          <Input name='phone' value={values.phone} onChange={handleChange} placeholder="Phone..." />
          <Input name='email' value={values.email} onChange={handleChange} placeholder="Email..." />
          <button type='submit'>Save</button>
        </form>
      </Modal>



      <Modal
        title="Edit User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={editModal}
        onCancel={handleCancelEdit}
      >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange} placeholder="Name..." />
          <Input name='avatar' value={values.avatar} onChange={handleChange} placeholder="Image..." />
          <Input name='age' value={values.age} onChange={handleChange} placeholder="Age..." />
          <Input name='phone' value={values.phone} onChange={handleChange} placeholder="Phone..." />
          <Input name='email' value={values.email} onChange={handleChange} placeholder="Email..." />
          <button type='submit'>Save</button>
        </form>
      </Modal>
    </>
  )
}

export default ReduxToolkit