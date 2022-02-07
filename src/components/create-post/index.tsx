import { memo, useState } from 'react';
import  Button  from '../shared/button';
import Input from '../shared/input';
import { ICreatePost } from '../../types';
import { createPost } from '../../store/actions/post-actions';
import { useDispatch } from 'react-redux';

const CreatePost = ({ user }: ICreatePost) => {
  const [title, setTitle] = useState<string>('');
  const [imageLink, setImageLink] = useState<string>('')
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch()

  const addNewPost = () => {
    if (!title.trim().length || !description.trim().length) {
      return;
    }
    setTitle('');
    setDescription('');
    setImageLink('')
    //@ts-ignore
    dispatch(createPost({newPost: { title, description, imageLink, ref: user?.id}}));
  };

  return (
    <div className="header mt-20">
      <Input className="mb-20" value={title} onChange={setTitle} placeholder='title' />
      <Input  className="mb-20" value={imageLink} onChange={setImageLink} placeholder={'title'} />
      <Input  className="mb-20" value={description} onChange={setDescription} placeholder="description" />
      <Button  className="mb-20" name={'add post'} onClick={addNewPost} />
    </div>
  );
};

export default memo(CreatePost);
