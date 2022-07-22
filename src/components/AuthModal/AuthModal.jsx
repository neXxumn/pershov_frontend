import { React, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, useField } from 'formik';
import { string, func, bool } from 'prop-types';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { userAuthValidate, userRegistrationValidate } from '../../helpers/validate';
import { authRequest } from '../../redux/actions';

import './AuthModal.css';

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1565C0',
  color: '#BBDEFB',
  border: '2px solid #BBDEFB',
  boxShadow: 24,
  p: 4,
};

const AuthorizationInitialValue = {
  email: '',
  password: '',
};

const RegistrationInitialValue = {
  email: '',
  name: '',
  password: '',
};

function AuthModal({
  handleClose,
  isAccess,
  isModalOpen,
  isAuthorization,
}) {
  const dispatch = useDispatch();

  const modalName = isAuthorization ? 'Sign In' : 'Sign Up';
  const error = useSelector((state) => state.auth.error);

  const userInitialization = (data) => {
    dispatch(authRequest({ ...data, authorization: isAuthorization }));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="modal"
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            <h1>{modalName}</h1>
            <Formik
              initialValues={isAuthorization ? AuthorizationInitialValue : RegistrationInitialValue}
              validationSchema={isAuthorization
                ? userAuthValidate
                : userRegistrationValidate}
              onSubmit={userInitialization}
            >
              <Form>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="enter@your.email"
                />

                {
                  !isAuthorization && (
                    <Input
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Your name..."
                    />
                  )
                }
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Your password..."
                />
                <p className="form-error">
                  { !error ? '' : error }
                  { isAccess ? `${modalName} successfull` : '' }
                </p>
                <div className="form-buttons-container">
                  <button
                    className="form-button"
                    type="submit"
                  >
                    {
                        modalName
                    }
                  </button>
                  <button className="form-button" type="button" onClick={handleClose}>
                    Close
                  </button>
                </div>
              </Form>
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

Input.propTypes = {
  label: string.isRequired,
};

AuthModal.propTypes = {
  handleClose: func.isRequired,
  isAccess: bool.isRequired,
  isModalOpen: bool.isRequired,
  isAuthorization: bool.isRequired,
};

export default memo(AuthModal);
