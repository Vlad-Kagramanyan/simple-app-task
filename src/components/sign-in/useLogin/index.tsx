import { useEffect, useState } from 'react';
import { getUser } from '../../../store/actions/user-action';
import { useDispatch, useSelector } from 'react-redux';

const UseLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector(({ user }: any) => user);

  useEffect(() => {
    if (error) {
      setErrorAndClearTimer(error);
    }
  }, [error]);

  const setErrorAndClearTimer = (text: string) => {
    setErrorMsg(text);
    setTimeout(() => {
      setErrorMsg('');
    }, 3000);
  };

  const onSubmit = () => {
    if (!login.length || !password.length) {
      return setErrorAndClearTimer('all fields are required');
    }
    //@ts-ignore
    dispatch(getUser({ email: login, password }));
  };

  return { login, setLogin, password, setPassword, onSubmit, errorMsg };
};

export default UseLogin;
