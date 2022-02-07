import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../components/sign-in';
import SignUp from '../components/sign-up';
import Profile from '../pages/profile';
import Feed from '../pages/feed';
import Layout from '../layout';

function Routing() {
  const userData = useSelector(({ user }: any) => user);
  const isUser = !!userData.user;

  return (
    <div>
      <Router>
        <>
          {isUser ? (
            <Layout>
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Layout>
          ) : (
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          )}
        </>
      </Router>
    </div>
  );
}

export default Routing;
