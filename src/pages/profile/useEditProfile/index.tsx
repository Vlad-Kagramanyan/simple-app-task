import { useState } from 'react';
import { isCorrectEmailAddress } from '../../../helpers';
import { db } from '../../../constants/index';
import { collection } from 'firebase/firestore';
import { updateUser } from '../../../store/actions/user-action';
import { useDispatch } from 'react-redux';

const UseEditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const userCollectionRef = collection(db, 'users');
  const dispatch = useDispatch();

  const setErrorAndClearTimer = (text: string) => {
    setErrorMsg(text);
    setTimeout(() => {
      setErrorMsg('');
    }, 3000);
  };

  const onSubmit = async ({ userData }: any) => {
    if (login && !isCorrectEmailAddress(login)) {
      return setErrorAndClearTimer('please enter valid email address');
    }
    if (password && password.length < 6) {
      return setErrorAndClearTimer('password must be at least 8 characters');
    }
    const updatedUser = {
      firstName: firstName || userData.firstName,
      lastName: lastName || userData.lastName,
      company: companyName || userData.company,
      email: login || userData.email,
      password: password || userData.password,
    };
    //@ts-ignore
    dispatch(updateUser({ updatedUser, id: userData.id }));
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

export default UseEditProfile;
