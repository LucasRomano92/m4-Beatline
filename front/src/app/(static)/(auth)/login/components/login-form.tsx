'use client'   
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import React, { children } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email('El correo electronico debe ser valido').required('El correo electronico es requerido'),
  password: Yup.string().min(6, 'La contrasena debe tener al menos 6 caracteres').required('La contrasena es requerida'),
});

const LoginForm = () => {
  const [formData, setFormData] = React.useState ({
    email: "lucas@gmail.com",
    password: "prueba123"
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

// VALIDACIONES
const handleValidation = async () => {
  try {
    await loginSchema.validate(formData, { abortEarly: false });
    return true; // Validación exitosa
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
     
      const newErrors: Record<string, string> = {};
      error.inner.forEach((curr) => {
        if (curr?.path) {
          newErrors[curr.path] = curr.message;
        }
      });
      setErrors(newErrors);
    }
    return false; // Validación fallida
  }
};

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {id, value} = e.target;
  setFormData ((prev) => ({
    ...prev, [id]: value,
  }));
};

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  handleValidation();
  e.preventDefault();
  console.log ("formulario enviado: ",formData)
};
  return (
    <form className='flex flex-col' onSubmit={onSubmit}>
        <Input 
        label="Correo electronico"
              id="email"
              type="text"
              placeholder='Ingresa tu correo electronico'
              className='mb-4' 
              value={formData.email}
              onChange={handleOnChange}
              error={errors?.email}
              />  

              <Input
              label='Contrasena'
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Ingresa tu Contrasena'
              className='mb-4'
              value= {formData.password}
              onChange={handleOnChange}
               error={errors?.password}
              children={<div onClick={handleShowPassword} className="text-gray-500">{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</div>} />

              
        <Button label='Iniciar Sesion'>Iniciar Sesion</Button>
    
    </form>
  );
}

export default LoginForm;