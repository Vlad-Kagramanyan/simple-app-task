import { memo } from 'react';
import { deletePost } from '../../store/actions/post-actions';
import { IPost, IPostsParams } from '../../types';
import { useDispatch } from 'react-redux';
import Post from '../post';

const Posts = ({ list, user }: IPostsParams) => {
  const dispatch = useDispatch();
  const deletePostById = (id: string) => {
    //@ts-ignore
    dispatch(deletePost({ id }));
  };

  return (
    <div>
      {list.map((item: IPost, index: number) => (
        <Post
          key={item.id.toString()}
          id={item.id}
          title={item.title}
          description={item.description}
          imageLink={item.imageLink}
          deletePostById={item.ref === user?.id ? deletePostById : null}
        />
      ))}
    </div>
  );
};

const areEqual = function (prevProps: IPostsParams, nextProps: IPostsParams) {
  return prevProps.list === nextProps.list;
};

export default memo(Posts, areEqual);
