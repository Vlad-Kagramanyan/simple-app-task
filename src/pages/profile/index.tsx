import { useSelector } from 'react-redux';
import Alert from '../../components/shared/alert';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input';
import useEditProfile from './useEditProfile';
import UserInfoItem from './user-info-item';
import './styles.scss';

const Profile = () => {
  const {
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
  } = useEditProfile();

  const userData = useSelector(({ user }: any) => user)?.user;

  return (
    <div className="sign-up-block">
      <h3 className="mb-20"> Sign In</h3>
      <UserInfoItem value={firstName} setValue={setFirstName} info={userData.firstName} placeholder="First Name" />
      <UserInfoItem value={lastName} setValue={setLastName} info={userData.lastName} placeholder="Last Name" />
      <UserInfoItem value={companyName} setValue={setCompanyName} info={userData.company} placeholder="company" />
      <UserInfoItem value={login} setValue={setLogin} info={userData.email} placeholder="login" />
      <h3>change password</h3>
      <Input className="mb-20" placeholder="enter new passowrd" value={password} onChange={setPassword} />
      <Button className="mb-10" name="Save changes" onClick={() => onSubmit({ userData })} />
      {errorMsg && <Alert type="error" text={errorMsg} />}
    </div>
  );
};

export default Profile;
