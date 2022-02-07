import { memo } from 'react';
import deleteIcon from '../../images/icons/delete-icon.png';
import { IPostParams } from '../../types';
import './styles.scss';

const Post = ({ id, title, description, imageLink, deletePostById }: IPostParams) => {
  return (
    <div className="post-block">
      <header className="title-block mb-20">
        <span className="title">{title}</span>
        {deletePostById && (
          <span onClick={() => deletePostById(id)}>
            <img className="delete-icon" src={deleteIcon} alt={'delete icon'} />
          </span>
        )}
      </header>
      {imageLink && (
        <div className="image-block mb-10">
          <img src={imageLink} alt="img" />
        </div>
      )}
      <footer className="description-block">
        <span className="description">{description}</span>
      </footer>
    </div>
  );
};

const areEqual = function (prevProps: any, nextProps: any) {
  if (prevProps.title === nextProps.title && prevProps.description === nextProps.description) {
    return true;
  }
  return false;
};

export default memo(Post, areEqual);
