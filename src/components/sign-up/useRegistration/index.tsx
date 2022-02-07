import { useState } from 'react';
import { isCorrectEmailAddress } from '../../../helpers';
import { createUser } from '../../../store/actions/user-action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UseRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setErrorAndClearTimer = (text: string) => {
    setErrorMsg(text);
    setTimeout(() => {
      setErrorMsg('');
    }, 3000);
  };

  const onSubmit = async () => {
    if (!firstName.length || !lastName.length || !companyName.length || !login.length || !password.length) {
      return setErrorAndClearTimer('all fields are required');
    }
    if (!isCorrectEmailAddress(login)) {
      return setErrorAndClearTimer('please enter valid email address');
    }
    if (password.length < 6) {
      return setErrorAndClearTimer('password must be at least 8 characters');
    }
    const newUser = {
      firstName,
      lastName,
      company: companyName,
      email: login,
      password,
    };
    //@ts-ignore
    dispatch(createUser({ newUser, navigate }));
  };

  return {
    login,
    setLogin,
    password,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    companyName,
    setCompanyName,
    setPassword,
    onSubmit,
    errorMsg,
  };
};

export default UseRegistration;
