import React from 'react'
import { useTodo } from '../store/Todo'
import edit from '../assets/edit.svg'
import delet from '../assets/delete.svg'
import info from '../assets/info.svg'

const Home = () => {
  const { data } = useTodo()

  return (
    <>
      <table className='w-[80%] m-auto border-collapse text-left '>
        <thead>
          <tr className='border-[1px] border-solid border-[#cccccc] '>
            <th className='p-[20px]'>#</th>
            <th className='p-[20px]'>Name</th>
            <th className='p-[20px]'>Age</th>
            <th className='p-[20px]'>Status</th>
            <th className='p-[20px]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user) => {
              return <tr className='border-[1px] border-solid border-[#cccccc] '>
                <td>{user.id}</td>
                <td>
                  <div className='flex gap-[10px]'>
                    <img src={user.avatar} className='w-[60px] h-[60px] rouded-[50%]' alt="" />
                    <h1 className='text-[20px]'>{user.name}</h1>
                  </div>
                </td>
                <td>{user.age}</td>
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
                <td>
                  <div className=' flex gap-[10px] '>
                      <img src={edit} className='w-[23px] h-[23px]' alt="" />
                      <img src={delet}  className='w-[23px] h-[23px]' alt="" />
                      <img src={info}  className='w-[23px] h-[23px]' alt="" />
                      <input type="checkbox"  className='w-[23px] h-[23px]' />
                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Home