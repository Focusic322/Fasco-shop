import React, { useEffect, useState } from 'react';
import Coat1 from './../../Img/People/Coat1.svg';
import Coat2 from './../../Img/People/Coat2.svg';
import Button from '../../Ui/Button';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email shouldn`t be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(!emailError);
  }, [emailError]);

  const blurHandler = (e) => {
    if (e.target.name === 'email') {
      setEmailDirty(true);
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

  const validation = () => {
    if (!emailError && email) {
      alert('Form submitted!');
    } else {
      alert('Please correct the errors before submitting.');
    }
  };

  return (
    <div className='pt-14'>
      <div>
        <div className='flex justify-between items-center'>
          <img src={Coat1} alt="" />
          <div>
            <h2 className='flex justify-center text-4xl font-medium pb-6'>
              Subscribe To Our Newsletter
            </h2>
            <p className='flex justify-center text-lg pb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis <br /> ultrices sollicitudin aliquam sem.
              Scelerisque duis ultrices sollicitudin
            </p>
            <div className='flex justify-center pb-6'>
              <input
                onChange={emailHandler}
                onBlur={blurHandler}
                type="email"
                placeholder='michael@gmail.com'
                name='email'
                className='w-[100%] pt-4 pb-4 pl-4  border-black rounded-lg border-2'
                value={email}
              />
            </div>
            {emailDirty && emailError && (
              <div className="text-red text-sm">{emailError}</div>
            )}
            <div className='flex justify-center'>
              <Button
                title={'Subscribe Now'}
                onClick={validation}
                disabled={!formValid}
              />
            </div>
          </div>
          <img src={Coat2} alt="" />
        </div>
      </div>
    </div>
  );
}
