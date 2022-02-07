import { memo } from 'react';
import { InputProps } from '../../../types';
import './styles.scss';

const Input = ({ type, label, value, onChange, className, placeholder }: InputProps) => {
  return (
    <div className={`input-block ${className ?? ''}`}>
      {label && (
        <label className="label" htmlFor="">
          {label}
        </label>
      )}
      <input
        className="input-field"
        type={type ?? 'text'}
        value={value}
        placeholder={placeholder ?? ''}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default memo(Input);
