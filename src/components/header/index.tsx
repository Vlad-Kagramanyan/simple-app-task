import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../shared/button';
import './styles.scss';

const Header = () => {
  const { user } = useSelector(({ user }: any) => user);

  const onExit = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  return (
    <div className="App-header">
      <nav>
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="user-name">
        <span>
          {user.firstName} {user.lastName}
        </span>
      </div>
      <div>
        <Button name={'Exit'} onClick={onExit} />
      </div>
    </div>
  );
};

export default Header;
