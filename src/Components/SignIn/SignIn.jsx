import React, { useEffect, useState } from 'react';
import welcomeImg from '../../Img/People/welcomeImg.svg';
import Google from '../../Img/Logo/Google.svg';
import { Link } from 'react-router';
import Email from '../../Img/Logo/Email.svg';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email shouldn`t be empty');
  const [passwordError, setPasswordError] = useState('Password shouldn`t be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  };


  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('It`s an incorrect email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Password should be at least 3 characters long and no more than 8 characters')
      if(!e.target.value) {
        setPasswordError('Password shouldn`t be empty')
      }
    }else{
      setPasswordError('')
    }
  };




  return (
    <div className='flex items-center w-screen overflow-hidden '>
      <div className='flex-shrink-0 w-1/2'>
        <img src={welcomeImg} alt="" className='h-screen w-full object-cover' />
      </div>
      <div className='pl-14 pr-14 w-1/2'>
        <h2 className='flex text-5xl volkhov-bold pb-14'>FASCO</h2>
        <span className='text-xl text-black font-medium'>Sign In To FASCO</span>
        <div className='flex gap-8 items-center pt-8 text-black text-xl'>
          <button className='flex items-center gap-2 border-[1px] border-ligthSky rounded-lg pt-2 pb-2 pl-2 pr-2 hover:opacity-85 duration-500'>
            <img src={Google} alt="" className='w-[42px] h-[42px]'/><span>Sign up with Google</span>
          </button>
          <button className='flex items-center gap-2 border-[1px] border-ligthSky rounded-lg pt-2 pb-2 pl-2 pr-2 hover:opacity-85 duration-500'>
            <img src={Email} alt="" /><span>Sign up with Email</span>
          </button>
        </div>
        <div className='flex gap-2 pt-14 justify-center items-center text-3xl font-bold text-Gray'>
            <div className='w-6 bg-Gray h-1'></div>
            <span>OR</span>
            <div className='w-6 bg-Gray h-1'></div>
        </div>
        <div className='grid gap-7'>
            {(emailDirty && emailError) && (
              <div className="text-red text-sm">{emailError}</div>
            )}
            <div className='border-b pb-2 border-Gray'><input type="email" onChange={emailHandler} name='email' onBlur={e => blurHandler(e)} value={email} placeholder='Email' className='outline-none w-full'/></div>
            {(passwordError && passwordDirty) && (
              <div className="text-red text-sm">{passwordError}</div>
            )
            }
            <div className='border-b pb-2 border-Gray'><input type="password" placeholder='Password' name='password' className='outline-none w-full' value={password} onChange={passwordHandler} onBlur={e => blurHandler(e)}/></div>
        </div>
        <Link to={'/fullpage'} className='flex justify-center pt-14'><button className='text-white font-medium w-1/2 bg-black pt-4 pb-4 pr-4 pl-4 rounded-lg hover:opacity-75 duration-500' disabled={!formValid}>Sign In</button></Link>
        <div className='relative'>
            <Link to={'/register'} className=' flex justify-center pt-6'><button className='text-ligthSky font-medium w-1/2 border-2 rounded-lg border-ligthSky pt-3 pb-3 pr-4 pl-4 hover:bg-ligthSky hover:text-white duration-500'>Register Now</button></Link>
            <span className='absolute right-[170px] pt-4 text-ligthSky font-medium'>Forget Password?</span>
        </div>
        <div className='absolute bottom-8 right-6'>FASCO Terms & Codnitions</div>
      </div>
    </div>
  );
}
