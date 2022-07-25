import React from 'react';
import { useField } from 'formik';
import { string } from 'prop-types';

import './Input.css';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="field">
        <label htmlFor={field.name}>{`Enter ${label}: `}</label>
        <input className="text-input input" {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

Input.propTypes = {
  label: string.isRequired,
};

export default Input;
