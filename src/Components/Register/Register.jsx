import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../Img/People/signup.svg';
import Google from '../../Img/Logo/Google.svg';
import Email from '../../Img/Logo/Email.svg';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [configurePassword, setConfigurePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [configurePasswordDirty, setConfigurePasswordDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email shouldn`t be empty');
  const [passwordError, setPasswordError] = useState('Password shouldn`t be empty');
  const [configurePasswordError, setConfigurePasswordError] = useState('Configure password shouldn`t be empty');
  const [firstNameError, setFirstNameError] = useState('First name shouldn`t be empty');
  const [lastNameError, setLastNameError] = useState('Last name shouldn`t be empty');
  const [phoneError, setPhoneError] = useState('Phone number shouldn`t be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(!emailError && !passwordError && !configurePasswordError && !phoneError);
  }, [emailError, passwordError, configurePasswordError, phoneError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstNameDirty(true)
        break;
      case 'lastName':
        setLastNameDirty(true)
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'phone':
        setPhoneDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'configurePassword':
        setConfigurePasswordDirty(true);
        break;
      default:
        break;
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
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Password should be at least 3 characters');
    } else if (!e.target.value) {
      setPasswordError('Password shouldn`t be empty');
    } else {
      setPasswordError('');
    }
  };

  const configurePasswordHandler = (e) => {
    setConfigurePassword(e.target.value);
    if (e.target.value !== password) {
      setConfigurePasswordError('Passwords do not match');
    } else {
      setConfigurePasswordError('');
    }
  };

  const nameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 3) {
      setFirstNameError('First name should be at least 3 characters')
    }
    if (e.target.value.length > 12) {
      setFirstNameError('First name should be no more 12 characters')
    }else{
      setFirstNameError('')
    }
  }
  const lastHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 3) {
      setLastNameError('Last name should be at least 3 characters')
    }
    if (e.target.value.length > 12) {
      setLastNameError('Last name should be no more 12 characters')
    }else{
      setLastNameError('')
    }
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneRegex.test(e.target.value)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };
  

  return (
    <div className="flex items-center w-screen overflow-hidden">
      <div className="flex-shrink-0 w-1/2">
        <img src={SignUp} alt="Sign Up" className="h-screen w-full object-cover" />
      </div>
      <div className="pl-14 pr-14 w-1/2">
        <h2 className="flex text-5xl volkhov-bold pb-14">FASCO</h2>
        <span className="text-xl text-black font-medium">Sign In To FASCO</span>
        <div className="flex gap-8 items-center pt-8 text-black text-xl">
          <button className="flex items-center gap-2 border-[1px] border-ligthSky rounded-lg pt-2 pb-2 pl-2 pr-2 hover:opacity-85 duration-500">
            <img src={Google} alt="Google" className="w-[42px] h-[42px]" />
            <span>Sign up with Google</span>
          </button>
          <button className="flex items-center gap-2 border-[1px] border-ligthSky rounded-lg pt-2 pb-2 pl-2 pr-2 hover:opacity-85 duration-500">
            <img src={Email} alt="Email" />
            <span>Sign up with Email</span>
          </button>
        </div>
        <div className="flex gap-2 pt-14 justify-center items-center text-3xl font-bold text-Gray">
          <div className="w-6 bg-Gray h-1"></div>
          <span>OR</span>
          <div className="w-6 bg-Gray h-1"></div>
        </div>
        <div className="relative flex items-center gap-4 pt-6">
        {firstNameDirty && firstNameError && <div className="absolute top-1 text-red text-sm">{firstNameError}</div>}
          <input type="name" className="w-1/2 border-b pb-2 border-Gray outline-none" placeholder="First Name" onBlur={(e) => blurHandler(e)} value={firstName} name='firstName' onChange={nameHandler}/>
        {lastNameDirty && lastNameError && <div className="absolute top-1 right-0 text-red text-sm">{lastNameError}</div>}
          <input type="text" className="w-1/2 border-b pb-2 border-Gray outline-none" placeholder="Last Name" value={lastName} name='lastName'  onBlur={(e) => blurHandler(e)} onChange={lastHandler}/>
        </div>
        <div className="relative flex items-center gap-4 pt-6">
          {emailDirty && emailError && <div className="absolute top-1 text-red text-sm">{emailError}</div>}
          <input
            type="email"
            name="email"
            onChange={emailHandler}
            onBlur={(e) => blurHandler(e)}
            value={email}
            className="w-1/2 border-b pb-2 border-Gray outline-none"
            placeholder="Email Address"
          />
          {phoneDirty && phoneError && <div className="absolute top-1 right-0 text-red text-sm">{phoneError}</div>}
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={phoneHandler}
              onBlur={(e) => blurHandler(e)}
              className='w-1/2 border-b pb-2 border-Gray outline-none'
              placeholder="Phone Number"
            />
        </div>
        <div className="relative flex items-center gap-4 pt-6 pb-14">
          {passwordDirty && passwordError && <div className="absolute text-wrap top-1 text-red text-sm">{passwordError}</div>}
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            onBlur={(e) => blurHandler(e)}
            className="w-1/2 border-b pb-2 border-Gray outline-none"
            placeholder="Password"
          />
          {configurePasswordDirty && configurePasswordError && (
            <div className="absolute top-1 right-0 text-red text-sm">{configurePasswordError}</div>
          )}
          <input
            type="password"
            name="configurePassword"
            value={configurePassword}
            onChange={configurePasswordHandler}
            onBlur={(e) => blurHandler(e)}
            className="w-1/2 border-b pb-2 border-Gray outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <Link to="/fullpage" className="flex justify-center">
          <button
            className="text-white font-medium w-1/2 bg-black pt-4 pb-4 pr-4 pl-4 rounded-lg hover:opacity-75 duration-500"
            disabled={!formValid}
          >
            Create account
          </button>
        </Link>
        <div className="flex justify-center items-center text-lg gap-2 pt-8 font-medium text-black">
          Already have an account?
          <Link to="/fullpage" className="text-ligthSky hover:text-Gray duration-500">
            Login
          </Link>
        </div>
        <div className="absolute bottom-8 right-6">FASCO Terms & Conditions</div>
      </div>
    </div>
  );
}
