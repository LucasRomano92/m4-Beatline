import React from 'react'
import LoginForm from './components/login-form';
import Link from 'next/link';

const page = () => {
  return (
    <div >
      <h2 className='my-3 text-2xl font-bold text-center text-neutral-600'>Iniciar sesion</h2>
      <LoginForm />
      <p className='mt-3 text-sm text-center text-neutral-500'>
        no tienes cuenta ? {" "}
    <Link href="/register" className='text-primary-500 hover:underline'>
    Registrate
    </Link>
      </p>
    </div>
  )
}

export default page;