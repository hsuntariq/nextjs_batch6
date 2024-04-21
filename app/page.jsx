import React from 'react'
import { authenticate } from './libs/actions'
import Button from './components/user/Button'

const page = () => {
  return (
    <>
      <div className="w-1/2 shadow-xl mx-auto p-3 ">
        <form action={authenticate}>

          <input type="text" name='email' className='border w-full my-2 p-3' />
          <input type="password" name="password" className='border w-full my-2 p-3' />
          <Button content="Sign In" />
        </form>
      </div>
    </>
  )
}

export default page