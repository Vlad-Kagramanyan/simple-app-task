import { memo, useState } from 'react';
import Input from '../../../components/shared/input';
import editIcon from '../../../images/icons/edit-icon.png';
import saveIcon from '../../../images/icons/save-icon.png';

const UserInfoItem = ({ value, setValue, info, placeholder }: any) => {
  const [isEdit, setIsedit] = useState(false);

  const onEdit = () => {
    setIsedit(!isEdit);
    setValue(info);
  };
  return (
    <div className="user-info-edit mb-20">
      {isEdit ? (
        <>
          <Input placeholder={placeholder} value={value} onChange={setValue} />
          <span onClick={() => setIsedit(!isEdit)}>
            <img src={saveIcon} alt="save-icon" />
          </span>
        </>
      ) : (
        <>
          <span>{value || info}</span>
          <span onClick={onEdit}>
            <img src={editIcon} alt="edit-icon" />
          </span>
        </>
      )}
    </div>
  );
};

export default memo(UserInfoItem);
