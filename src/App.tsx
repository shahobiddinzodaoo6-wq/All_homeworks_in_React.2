import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, editUser, type IData } from './store/counter'
import edit from './assets/edit.svg'
import delet from './assets/delete.svg'
import { Button, Input, Modal } from 'antd'


const App = () => {
  const { users } = useSelector((store) => store.counter)
  const dispatch = useDispatch()
  let [idx, setIdx] = useState(null)
  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("")

  const { setFieldValue, handleChange, handleSubmit, values, resetForm } = useFormik(
    {
      initialValues: {
        name: "",
        age: 0,
        avatar: ""
      },
      onSubmit: (value) => {
        if (!idx) {
          dispatch(addUser({
            id: Date.now(),
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
    }
  )

  function handleEdit(user) {
    setIdx(user.id)
    setFieldValue("name", user.name)
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
    <div className='mt-[100px]'>
      <div className='flex justify-around mb-[30px] '>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <div className='flex gap-[20px]'>
          <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' />
          <select value={select} onChange={(e) => setSelect(e.target.value)} >
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </div>
      <table className='w-[80%] m-auto border-collapse text-left'>
        <thead>
          <tr className='border-[1px] border-solid border-[#cbcbcb] bg-[#f2f2f2]'>
            <th className='p-[15px]'>#</th>
            <th className='p-[15px]'>Name</th>
            <th className='p-[15px]'>Age</th>
            <th className='p-[15px]'>Status</th>
            <th className='p-[15px]'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.filter((user: IData) => user.name.toLowerCase().includes(search.toLowerCase())).filter((e: IData) => e.status.toString().includes(select)).map((user) => {
              return <tr key={user.id} className='border-[1px] border-solid border-[#cbcbcb]'>
                <td className='p-[15px]'>{user.id}</td>
                <td className='p-[15px] flex gap-[10px]'>
                  <img src={user.avatar} className='w-[55px] h-[55px] rounded-[50%]' alt="" />
                  <h1 className='text-[20px] '>{user.name}</h1>
                </td>
                <td className='p-[15px]'>{user.age}</td>
                <td className='p-[15px]'>
                  {user.status && (
                    <p className='text-[green] p-[5px] rounded-[20px] w-[fit-content] bg-[lightgreen]'>Active</p>
                  )
                  }
                  {!user.status && (
                    <p className='text-[red] p-[5px] rounded-[20px] w-[fit-content]  bg-[lightpink]'>Inactive</p>
                  )
                  }
                </td>
                <td className='p-[15px] flex gap-[10px]'>
                  <img src={delet} onClick={()=> dispatch(deleteUser(user.id))} alt="" />
                  <img src={edit} onClick={() => { showModalEdit(), handleEdit(user) }} alt="" />
                  <input checked={user.status} onClick={() => dispatch(editUser({ ...user, status: !user.status }))} type="checkbox" className='w-[23px] h-[23px]' />
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