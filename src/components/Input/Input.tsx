import React, {ChangeEventHandler, HTMLInputTypeAttribute} from 'react';
import cx from 'classnames';

import './Input.css';

interface InputProps {
  id?: string;
  error?: string;
  type: HTMLInputTypeAttribute,
  value: string;
  label?: string;
  onChange: (value: string) => void;
  testID?: string;
  forwardedRef?: React.Ref<HTMLInputElement>;
}

const Input = ({id, error, forwardedRef, onChange, value, label, testID, type}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={cx('Input', {error: !!error})}>
      <label
        className="Input__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        ref={forwardedRef}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={label}
        data-testid={testID}
      />
      <div className="Input__error-message">
        {error}
      </div>
    </div>
  );
};

export default React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <Input {...props} forwardedRef={ref} />
));
