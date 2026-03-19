import React from 'react'
import { useAtom } from 'jotai'
import { Button, Input, Modal } from 'antd'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { loadableAtom, deleteUser, addUser, editUser, selectAtom, searchAtom } from '../atom/store'





const AsyncJotai = () => {
     const [{ data, state, error }] = useAtom(loadableAtom)
    const [, deletUser] = useAtom(deleteUser)

    const [, addUserAtom] = useAtom(addUser)
    const [, editUserAtom] = useAtom(editUser)

    let [select, setSelect] = useAtom(selectAtom)
    let [search, setSearch] = useAtom(searchAtom)

    let [debounse, setDebounse] = useState("")

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearch(debounse)
        }, 500)
        return () => clearTimeout(timeout)

    }, [debounse])



    let [idx, setIdx] = useState(null)
    const { setFieldValue, handleChange, handleSubmit, values, resetForm } = useFormik(
        {
            initialValues: {
                name: "",
                age: 0,
            },
            onSubmit: (value) => {
                if (!idx) {
                    addUserAtom({

                        name: value.name,
                        age: value.age,
                        status: false
                    })
                    handleCancel()
                    resetForm()
                } else {
                    editUserAtom({
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

    function handleEdit(user) {
        setIdx(user.id)
        setFieldValue("name", user.name)
        setFieldValue("age", user.age)
    }

    return (

        state == "hasData" && (
            <div>
                <div className='flex justify-around mt-[10px] '>
                    <Button type="primary" className='m-[00px]' onClick={showModal}>
                        Open Modal
                    </Button>
                    <div className='flex gap-[20px]'>
                        <Input value={debounse} onChange={(e) => setDebounse(e.target.value)} className='h-[43px]' type="text" placeholder='Search...' />
                        <select value={select} onChange={(e) => setSelect(e.target.value)} >
                            <option value="">All</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                </div>

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


                                    <Button onClick={() => {
                                        showModalEdit()
                                        handleEdit(user)
                                    }}>edit</Button>
                                    <input type="checkbox" className='w-[24px] h-[24px] ' checked={user.status} onChange={() => editUserAtom({...user, status: !user.status})} />
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
    )
}

export default AsyncJotai


