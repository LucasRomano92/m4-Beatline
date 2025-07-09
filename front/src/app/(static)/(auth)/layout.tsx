
import { FC } from 'react';
import { LuKeyboardMusic } from 'react-icons/lu';


interface LayoutMainAuthProps {
    children: React.ReactNode;
}

const LayoutMainAuth: FC<LayoutMainAuthProps> = ({ children }) => {
    return (
        
       <div>
        
       
        <div className="flex min-h-screen">
            {/* Left side: white background with card */}
            <div className="flex flex-col items-center justify-center w-full text-black md:w-1/2" >
            <div
                 className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <LuKeyboardMusic className='h-10 text-primary-300' />
                  <span className="self-center text-2xl font-semibold text-white whitespace-nowrapte">Beatline</span>
                </div>
                <div>{children}</div>
            </div>
            
            {/* Right side: full image */}
            <div className="hidden md:block md:w-1/2">
            <img
                src="https://images.unsplash.com/photo-1556379118-7034d926d258?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Auth background"
                className="object-cover w-full h-screen"
            />
            </div>
        </div>
       </div>
    );
}
export default LayoutMainAuth;
