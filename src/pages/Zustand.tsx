import React, { useState } from 'react'
import { useTodo } from '../storeZustand/Todo'
import delet from '../assets/trash (1).svg'
import edit from '../assets/edit.svg'
import { useFormik } from 'formik'
import { Button, Input, Modal } from 'antd'

interface IData {
    id: number | string,
    name: string,
    age: number,
    avatar: string,
    status: boolean
}


const Zustand = () => {
    const { users, deleteUser, editUser, addUser } = useTodo() as {
        users: IData[]
        deleteUser: (id: number | string) => undefined
        editUser: (user: IData) => undefined
        addUser: (user: IData) => undefined
    }
    let [idx, setIdx] = useState<number | null>(null)

    const { values, handleChange, handleSubmit, resetForm, setFieldValue } = useFormik({
        initialValues: {
            name: "",
            age: 0,
            avatar: "",
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
                handleCancel()
                resetForm()
            } else {
                editUser({
                    id: idx,
                    status: false,
                    ...value
                })
                handleCancelEdit()
            }
        }
    })

    let [addModal, setAddModal] = useState(false)
    let [editModal, setEditModal] = useState(false)


    let [search, setSearch] = useState("")
    let [select, setselect] = useState("")


    const showModal = () => {
        setAddModal(true);
    };

    const handleCancel = () => {
        setAddModal(false);
    };

    const showModalEdit = () => {
        setAddModal(true);
    };

    const handleCancelEdit = () => {
        setAddModal(false);
    };


    function handleEdit(user: any) {
        setIdx(user.id)
        setFieldValue("name", user.name)
        setFieldValue("age", user.age)
        setFieldValue("avatar", user.avatar)
    }

    return (
        <>
            <div className='flex justify-around mt-[50px]'>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <div className='flex gap-[20px]'>
                    <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' />
                    <select value={select} onChange={(e) => setselect(e.target.value)} className='w-[110px] h-[43px] rounded-[7px] border-[1px] border-solid border-[#dedede] outline-blue-300' >
                        <option value="">All</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                </div>
            </div>
            <div className='m-[50px] flex flex-wrap gap-[30px] '>
                {
                    users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase().trim())).filter((e) => e.status.toString().includes(select)).map((user) => {
                        return <div key={user.id} className='w-[250px] h-[300px] rounded-[15px] shadow-[0px_0px_10px_lightgrey] text-center'>
                            <img src={user.avatar} className='ml-[85px] mt-[20px] w-[80px] h-[80px] rounded-[50%]  ' alt="" />
                            <h1 className='mt-[10px] text-[20px] '>{user.name}</h1>
                            {user.status && (
                                <p className='text-[green] mt-[10px]'>Active</p>
                            )
                            }
                            {!user.status && (
                                <p className='text-[red] mt-[10px]'>Inactive</p>
                            )
                            }
                            <p className='text-[grey] mt-[10px]'>{user.age}</p>
                            <div className='flex justify-center gap-[20px] mt-[30px]'>
                                <img src={delet} onClick={() => deleteUser(user.id)} className='w-[23px] h-[23px]' alt="" />
                                <img src={edit} onClick={() => {
                                    handleEdit(user)
                                    showModalEdit()
                                }} className='w-[23px] h-[23px]' alt="" />
                                <input type="checkbox" checked={user.status} onClick={() => editUser({ ...user, status: !user.status })} className='w-[23px] h-[23px]' />
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
                    <Input type="text" name='name' value={values.name} onChange={handleChange} placeholder='Name...' />
                    <Input type="text" name='age' value={values.age} onChange={handleChange} placeholder='Age...' />
                    <Input type="text" name='avatar' value={values.avatar} onChange={handleChange} placeholder='Avatar...' />
                    <button type='submit'>Save</button>
                </form>
            </Modal>




            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={editModal}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <form onSubmit={handleSubmit}>
                    <Input type="text" name='name' value={values.name} onChange={handleChange} placeholder='Name...' />
                    <Input type="text" name='age' value={values.age} onChange={handleChange} placeholder='Age...' />
                    <Input type="text" name='avatar' value={values.avatar} onChange={handleChange} placeholder='Avatar...' />
                    <button type='submit'>Save</button>
                </form>
            </Modal>



        </>
    )
}

export default Zustand