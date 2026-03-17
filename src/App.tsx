import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, DeleteUser, editUser, GetData, searchData, selectData, type IData } from './store/counter'
import edit from './assets/edit.svg'
import delet from './assets/delete.svg'
import { Button, Input, Modal } from 'antd'
import type { AppDispatch, RootState } from './store/store'



const App = () => {
  const { users } = useSelector((store: RootState) => store.counter)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(GetData())
  }, [])



  let [idx, setIdx] = useState<string | null >(null)


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
            id: Date.now().toString(),
            name: value.name,
            age:  value.age,
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

  function handleEdit(user: IData) {
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
      <div className='flex justify-around mb-[30px] gap-[350px] '>
        <Button type="primary" onClick={() => showModal()}>
          Open Modal
        </Button>
        <div className='flex gap-[20px]'>
          <input onChange={(e) => dispatch(searchData(e.target.value))} className='w-[300px] h-[43px] rounded-[10px] border-[1px] border-solid border-[lightgrey] pl-[20px]' type="text" placeholder='Search...' />
          <select className='w-[110px] h-[43px] rounded-[10px] border-[1px] border-solid border-[lightgrey]'  onChange={(e) => dispatch(selectData(e.target.value))} >
            <option value="all">All</option>
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
            users.map((user: IData) => {
              return <tr className='border-[1px] border-solid border-[#cbcbcb]'>
                <td className='p-[10px]'>{user.id}</td>
                <td className='flex gap-[10px] p-[10px]'>
                  <img src={user.avatar} className='w-[55px] h-[55px] rounded-[50%]' alt="" />
                  <h1 className='text-[20px] mt-[10px]'>{user.name}</h1>
                </td>
                <td className='p-[10px]'>{user.age}</td>
                <td>
                  {user.status && (
                    <p className='text-[green]'>Active</p>
                  )
                  }
                  {!user.status && (
                    <p className='text-[red]'>Inactive</p>
                  )
                  }
                </td>
                <td className='p-[10px] flex gap-[10px]'>
                  <img src={delet} onClick={() => dispatch(DeleteUser(user.id))} alt="" />
                  <img src={edit} onClick={() => {
                    handleEdit(user)
                    showModalEdit()
                  }} alt="" />
                  <input type="checkbox" className='w-[23px] h-[23px]' checked={user.status} onChange={() => dispatch(editUser({ ...user, status: !user.status }))} />
                </td>
              </tr>
            })
          }
        </tbody>
      </table>






      <Modal
        title="Add User"
        closable={{ 'aria-label': 'Custom Close Button' }}
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