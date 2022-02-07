import { useEffect, useRef } from 'react';
import { IUser } from '../../types';
import CreatePost from '../../components/create-post';
import Posts from '../../components/posts';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions/post-actions';
import './styles.scss';

const Feed = () => {
  const { list } = useSelector(({ posts }: any) => posts);
  let savedUser: string | null = localStorage.getItem('user');
  const userData: IUser | null = savedUser ? JSON.parse(savedUser) : savedUser;
  const user = useRef(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="feed-block">
      <CreatePost user={user.current} />
      <br />
      <Posts list={list} user={user.current} />
    </div>
  );
};

export default Feed;
