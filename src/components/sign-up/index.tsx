import { Link } from 'react-router-dom';
import useRegistration from './useRegistration';
import Button from '../shared/button';
import Input from '../shared/input';
import Alert from '../shared/alert';
import './styles.scss';

const SignUp = () => {
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
  } = useRegistration();

  return (
    <div className="sign-up-block">
      <h3 className="mb-20"> Sign In</h3>
      <Input className="mb-20" label="First Name" value={firstName} onChange={setFirstName} />
      <Input className="mb-20" label="Last Name" value={lastName} onChange={setLastName} />
      <Input className="mb-20" label="Company Name" value={companyName} onChange={setCompanyName} />
      <Input className="mb-20" label="login" value={login} onChange={setLogin} />
      <Input className="mb-20" label="passowrd" value={password} onChange={setPassword} />
      <Button className="mb-10" name="Sign In" onClick={onSubmit} />
      {errorMsg && <Alert type="error" text={errorMsg} />}
      <Link to="/">Return to login page</Link>
    </div>
  );
};

export default SignUp;
