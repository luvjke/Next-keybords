import React from 'react';
import { FormInputProps } from './FormInput.props';

import styles from './FormInputProps.module.scss';
import { X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  required,
  textArea,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '');
  };
  return (
    <div>
      {label && (
        <p className={styles.label}>
          {label}
          {required && <span className={styles.required_symbol}>*</span>}
        </p>
      )}
      <div className={styles.input_box}>
        {!textArea ? (
          <input className={styles.input} {...props} {...register(name)} />
        ) : (
          <textarea
            rows={5}
            placeholder="Комментарий к заказу"
            className={styles.textarea}
            {...register(name)}
          />
        )}
        <button onClick={onClickClear} className={styles.button}>
          {value && <X width={20} height={20} />}
        </button>
      </div>

      {errorText && <p className={styles.error}>{errorText}</p>}
    </div>
  );
};
