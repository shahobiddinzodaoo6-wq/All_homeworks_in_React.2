import React from 'react'
import { useTodo } from './store/Todo'
import { Button } from 'antd'


const App = () => {
  const { data, deleteData ,addUser}  = useTodo()
  return (
    <div>
      {/* <h1>{count}</h1>
      <Button onClick={()=> setCount()}>+</Button>
      <Button onClick={()=> setMinus()}>-</Button> */}
      <Button onClick={addUser}> add+</Button>
      <div className='m-[100px] flex flex-wrap gap-[30px]'>
          {
            data.map((user)=> {
              return <div className='w-[200px] h-[200px] rounded-[20px] shadow-[0px_0px_10px_lightgrey] text-center'>
                          <h1 className='mt-[20px] text-[20px]'>{user.name}</h1>
                          <p className='mt-[10px] text-[grey] '>{user.age}</p>
                          <div className='mt-[20px] flex justify-center gap-[10px] '>
                              <Button danger onClick={()=> deleteData(user.id)}>delete</Button>
                             
                          </div>
              </div>
            })
          }
      </div>
    </div>
  )
}

export default App