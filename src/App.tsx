import { useAtom } from 'jotai'
import { Button, Input, Modal } from 'antd'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { addNew, dataAtom, deleteAtom, editUserAtom } from './atom/counter'

const App = () => {

  const [data] = useAtom(dataAtom)
  const [, deletUser] = useAtom(deleteAtom)
  const [, addUser] = useAtom(addNew)
  const [, editUser] = useAtom(editUserAtom)

  let [idx, setIdx] = useState(null)
  const { setFieldValue, handleChange, handleSubmit, values, resetForm } = useFormik(
    {
      initialValues: {
        name: "",
        age: 0,
      },
      onSubmit: (value) => {
        if (!idx) {
          addUser({
            id: Date.now(),
            name: value.name,
            age: value.age,
            status: false
          })
          handleCancel()
          resetForm()
        } else {
          editUser({
            id: idx,
            name: value.name,
            age: value.age,
            status: false
          })
          handleCancelEdit()

        }
      }
    }
  )

  let [addModal, setAddModal] = useState(false)
  let [EditModal, setEditModal] = useState(false)


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

  function handleEdit(user:unknown) {
    setIdx(user.id)
    setFieldValue("name",user.name)
    setFieldValue("age", user.age)
  }

  return (

    <div>
      <Button type="primary" className='m-[50px]' onClick={showModal}>
        Open Modal
      </Button>
      <div className='m-[100px] flex flex-wrap gap-[30px]'>
        {
          data.map((user) => {
            return <div className='w-[250px] h-[200px] rounded-[10px] shadow-[0px_0px_10px_lightgrey] text-center'>
              <h1 className='mt-[10px] text-[20px]'>{user.name}</h1>
              <h1 className='mt-[10px]'>{user.age}</h1>
              {user.status && (
                <p className='text-[green]'>Active</p>
              )
              }
              {!user.status && (
                <p className='text-[red]'>Inactive</p>
              )
              }
              <div className='flex gap-[10px] justify-center mt-[6px]'>
                <Button onClick={() => deletUser(user.id)} danger>delet</Button>
                <Button  onClick={()=>{
                  showModalEdit()
                  handleEdit(user)
                }}>edit</Button>
              </div>
            </div>
          })
        }
      </div>


      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={addModal}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <Input type="text" value={values.name} name='name' onChange={handleChange} />
          <Input type="text" value={values.age} name='age' onChange={handleChange} />
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
          <Input type="text" value={values.name} name='name' onChange={handleChange} />
          <Input type="text" value={values.age} name='age' onChange={handleChange} />
          <button type='submit'>Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default App