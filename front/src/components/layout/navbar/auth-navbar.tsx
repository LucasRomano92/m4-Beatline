'use client'
import Button from '@/components/ui/button';
import { useAuthContext } from '@/context/authContext';
import { routes } from '@/routes';
import Link from 'next/link';
import React from 'react'
import { IoCartOutline, IoLogOutOutline } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import Loader from '@/components/ui/loader/loader';

export const AuthNavbar = () => {
    const { isAuth, resetUserData } = useAuthContext();
    // Replace with actual authentication logic
    // Dummy user object for demonstration; replace with actual user data from context or props
    const pathname =  usePathname ();
      const user = {
    id: 1,
    name: 'Lucas',
    email: 'lucas@example.com',
    address: '123 Main St, Springfield',
    phone: '123-456-7890',
    role: 'user',
};
const logout = () => {
    resetUserData();
    //redireccion a la home no con el router de next sino forzando a que se re buildee toda la app de react de nuevo
    if (pathname === routes.home) {
        location.href = routes.login;
        return;
    }
    location.assign(routes.home);
    
};
if (isAuth === null) {
    return <Loader minHeight='35vh' />;
}
    if (!isAuth) {
        return ( <div>
            <Link href={routes.login}>
            <Button label='Iniciar Sesion' className='text-white bg-primary-500 hover:bg-primary-600'>
            </Button>
            </Link>
    <Link href={routes.register} >
            <Button label='Registrarse' variant='outline' ></Button>
            </Link>

        </div>
)
}

return (
    <div className='flex items-center space-x-4'>
        <div><Link href={routes.cart}>
            <IoCartOutline className='w-5 h-5 text-primary-500' />
        </Link>
        </div>
        <div className='flex items-center space-x-2 rtl:space-x-reverse'>
            <Link href={routes.profile}>
                <LuUserRound className='w-8 h-8 text-primary-500'/>
        <span className='font-medium cursor-pointer'>{user.name}</span>
            </Link>
        </div>
        <div onClick={logout} className='cursor-pointer'>
            <IoLogOutOutline className='w-5 h-5 text-primary-500' />
        </div>
    </div>
)
}
        
  
