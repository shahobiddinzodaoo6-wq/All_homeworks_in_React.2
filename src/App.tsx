import React, { useEffect, useState } from 'react'
import { useTodo } from './store/Todo'
import { Button, Modal, Switch } from 'antd'
import { useForm } from 'react-hook-form'

import delet from './assets/delete.svg'
import edit from './assets/edit.svg'
import info from './assets/info.svg'

let apiImg = "http://37.27.29.18:8001/images"

const App = () => {
  const {
    users,
    getData,
    deleteUser,
    addUser,
    editUser,
    checkStatus,
    deleteImage,
    addImage,
    infoUser,
    getInfo
  } = useTodo()

  useEffect(() => {
    getData()
  }, [])


  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [imgModal, setImgModal] = useState(false)


  const [infoModal, setInfoModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const [idx, setIdx] = useState<number | null>(null)


  const { register, handleSubmit, reset, setValue } = useForm()

  const onSubmit = (data) => {
    let form = new FormData()
    form.append("Name", data.name)
    form.append("Description", data.description)

    for (let i = 0; i < data.file.length; i++) {
      form.append("Images", data.file[i])
    }

    if (!idx) {
      addUser(form)
      setAddModal(false)
      reset()
    } else {
      editUser({
        id: idx,
        name: data.name,
        description: data.description
      })
      setEditModal(false)
    }



  }

  function handleEdit(user: any) {
    setIdx(user.id)
    setValue("name", user.name)
    setValue("description", user.description)
  }




  const onAddImage = (data) => {
    let form = new FormData()
    for (let i = 0; i < data.fileImg.length; i++) {
      form.append("Images", data.fileImg[i])
    }

    addImage(idx, form)
    setImgModal(false)
    reset()
  }

  return (
    <>
      <Button onClick={() => setAddModal(true)} className='m-[50px]'>
        ADD USER +
      </Button>

      <div className='flex flex-wrap gap-[30px] m-[100px]'>
        {
          users.map((user) => (
            <div key={user.id} className='w-[320px] rounded-[10px] shadow p-[10px] text-center'>

              {
                user.images.map((img) => (
                  <div key={img.id}>
                    <img src={`${apiImg}/${img.imageName}`} className='w-full h-[150px]' />
                    <div className='flex justify-center gap-[10px] mt-[5px]'>
                      <Button danger onClick={() => deleteImage(img.id)}>del</Button>
                      <Button onClick={() => {
                        setIdx(user.id)
                        setImgModal(true)
                      }}>add</Button>
                    </div>
                  </div>
                ))
              }

              <h1 className={user.isCompleted ? "text-green-500" : "text-red-500"}>
                {user.name}
              </h1>

              <p>{user.description}</p>

              <div className='flex justify-center gap-[10px] mt-[10px]'>

                <img src={edit} onClick={() => {
                  handleEdit(user)
                  setEditModal(true)
                }} />

                <img src={delet} onClick={() => deleteUser(user.id)} />

                <img src={info} onClick={() => {
                  getInfo(user.id)
                  setInfoModal(true)
                }} />


                <Switch defaultChecked checked={user.isCompleted} onChange={() => checkStatus(user.id)} />
              </div>
            </div>
          ))
        }
      </div>

      {/* Add */}
      <Modal open={addModal} onCancel={() => setAddModal(false)} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='w-[300px] h-[43px] rounded-[5px] border pl-[20px]'  {...register("name")} placeholder='Name' />
          <input className='w-[300px] h-[43px] rounded-[5px] border pl-[20px]'  {...register("description")} placeholder='Description' />
          <input type="file" multiple {...register("file")} />
          <button type='submit'>Save</button>
        </form>
      </Modal>

      {/* Edit */}
      <Modal open={editModal} onCancel={() => setEditModal(false)} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='w-[300px] h-[43px] rounded-[5px] border pl-[20px]' {...register("name")} />
          <input className='w-[300px] h-[43px] rounded-[5px] border pl-[20px]'  {...register("description")} /> <br />
          <button type='submit'>Save</button>
        </form>
      </Modal>

      {/* addImage */}
      <Modal open={imgModal} onCancel={() => setImgModal(false)} footer={null}>
        <form onSubmit={handleSubmit(onAddImage)}>
          <input type="file" multiple {...register("fileImg")} />
          <button type='submit'>Save</button>
        </form>
      </Modal>


      {/* Info */}
      <Modal
        open={infoModal}
        onCancel={() => setInfoModal(false)}
        footer={null}
      >
        {
          infoUser && (
            <div className='text-center'>

              <div className='flex flex-wrap gap-[10px] justify-center'>
                {
                  infoUser.images?.map((img) => (
                    <img
                      key={img.id}
                      src={`${apiImg}/${img.imageName}`}
                      className='w-[120px] h-[120px] rounded'
                    />
                  ))
                }
              </div>

              <h1 className='text-[22px] mt-[10px] font-bold'>
                {infoUser.name}
              </h1>
              <p>{infoUser.description}</p>
              {infoUser.isCompleted && (
                <p className='text-[green]'>Active</p>
              )
              }
              {!infoUser.isCompleted && (
                <p className='text-[red]'>Inactive</p>
              )
              }
            </div>
          )
        }
      </Modal>
    </>
  )
}

export default App