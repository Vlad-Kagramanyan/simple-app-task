import { Link } from 'react-router-dom';
import Button from '../shared/button';
import Alert from '../shared/alert';
import Input from '../shared/input';
import useLogin from './useLogin';
import './styles.scss';

const SignIn = () => {
  const { login, setLogin, password, setPassword, onSubmit, errorMsg } = useLogin();

  return (
    <div className="sign-in-block">
      <h3 className="mb-20"> Sign In</h3>
      <Input className="mb-20" label="login" value={login} onChange={setLogin} />
      <Input className="mb-20" type="password" label="password" value={password} onChange={setPassword} />
      <Button className="mb-10" name="Sign In" onClick={onSubmit} />
      {errorMsg && <Alert type="error" text={errorMsg} />}
      <Link to="/sign-up">Create new account</Link>
    </div>
  );
};

export default SignIn;
