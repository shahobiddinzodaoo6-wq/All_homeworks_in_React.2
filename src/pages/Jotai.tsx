import { useAtom } from 'jotai'
import { useState } from 'react'
import { addUser, dataAtom, deleteUser, editUser } from '../atom/counter'
import { useFormik } from 'formik'
import { Button, Input, Modal } from 'antd'
import edit from '../assets/edit.svg'
import delet from '../assets/trash (1).svg'



interface IData {
  id: number,
  name: string,
  age: number,
  avatar: string,
  status: boolean
}

const Jotai = () => {

  const [data] = useAtom(dataAtom)
  const [, deletUser] = useAtom(deleteUser)
  const [, addUserAtom] = useAtom(addUser)
  const [, editUserAtom] = useAtom(editUser)

  let [idx, setIdx] = useState<number | null>(null)
  const { setFieldValue, handleChange, handleSubmit, values, resetForm } = useFormik(
    {
      initialValues: {
        name: "",
        age: 0,
        avatar: ""
      },
      onSubmit: (value) => {
        if (!idx) {
          addUserAtom({
            id: Date.now(),
            name: value.name,
            age: value.age,
            status: false,
            avatar: value.avatar,
          })
          handleCancel()
          resetForm()
        } else {
          editUserAtom({
            id: idx,
            name: value.name,
            age: value.age,
            status: false,
            avatar: value.avatar
          })
          handleCancelEdit()

        }
      }
    }
  )

  let [addModal, setAddModal] = useState(false)
  let [EditModal, setEditModal] = useState(false)



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

  function handleEdit(user: IData) {
    setIdx(user.id)
    setFieldValue("name", user.name)
    setFieldValue("age", user.age)
    setFieldValue("avatar", user.avatar)
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
        <table className='w-[80%] m-auto text-left'>
          <thead>
            <tr className='border-[1px] border-solid border-blue-500 text-[#1f6cd7] bg-[#7abdff]'>
              <th className='p-[13px]'>#</th>
              <th className='p-[13px]'>Name</th>
              <th className='p-[13px]'>Age</th>
              <th className='p-[13px]'>Status</th>
              <th className='p-[13px]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter((user: IData) => user.name.toLowerCase().includes(search.toLowerCase())).filter((e: IData) => e.status.toString().includes(select)).map((user) => {
                return <tr className='border-[1px] border-solid border-blue-500 text-[#1f6cd7] '>
                  <td className='p-[13px] '>{user.id}</td>
                  <td className='p-[13px] flex gap-[10px]'>
                    <img src={user.avatar} className='w-[55px] h-[55px] rounded-[50%]  ' alt="" />
                    <h1 className='text-[20px] mt-[5px]'>{user.name}</h1>
                  </td>
                  <td className='p-[13px] '>{user.age}</td>
                  <td className='p-[13px] '>
                    {user.status && (
                      <p className='text-[green]'>Active</p>
                    )
                    }
                    {!user.status && (
                      <p className='text-[red]'>Inactive</p>
                    )
                    }
                  </td>
                  <td className='p-[13px] flex gap-[10px]'>
                    <img src={edit} onClick={() => {
                      showModalEdit()
                      handleEdit(user)
                    }} className='w-[23px] h-[23px]' alt="" />
                    <img src={delet} onClick={() => deletUser(user.id)} className='w-[23px] h-[23px]' alt="" />
                    <input type="checkbox" checked={user.status} onClick={() => editUserAtom({...user, status: !user.status})} className='w-[23px] h-[23px] ' />
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>





      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={addModal}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <Input type="text" value={values.name} name='name' onChange={handleChange} placeholder='Name...' />
          <Input type="text" value={values.age} name='age' onChange={handleChange} placeholder='Age...' />
          <Input type="text" value={values.avatar} name='avatar' onChange={handleChange} placeholder='Avatar...' />
          <button type='submit'>Save</button>
        </form>
      </Modal>




      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={EditModal}
        onCancel={handleCancelEdit}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <Input type="text" value={values.name} name='name' onChange={handleChange} placeholder='Name...' />
          <Input type="text" value={values.age} name='age' onChange={handleChange} placeholder='Age...' />
          <Input type="text" value={values.avatar} name='avatar' onChange={handleChange} placeholder='Avatar...' />
          <button type='submit'>Save</button>
        </form>
      </Modal>
    </>
  )
}

export default Jotai