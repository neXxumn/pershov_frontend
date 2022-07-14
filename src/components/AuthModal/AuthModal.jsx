import { React, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, useField } from 'formik';
import { string } from 'prop-types';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { REGISTRATION } from '../../redux/constants';
import { userAuthValidate, userRegistrationValidate } from '../../helpers/validate';
import { toggleModal, authRequest } from '../../redux/actions';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label htmlFor={field.name}>{`Enter ${label}: `}</label>
        <input className="text-input" {...field} {...props} />
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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RegistrationInitialValue = {
  email: '',
  password: '',
};

const AuthorizationInitialValue = {
  email: '',
  name: '',
  password: '',
};

function AuthModal() {
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const modalType = useSelector((state) => state.auth.modalType);

  const isAuth = modalType === REGISTRATION;

  const handleClose = () => {
    dispatch(toggleModal({ isModalOpen: false, modalType: isAuth }));
  };

  const userInitialization = (data) => {
    dispatch(authRequest(data));
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
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            <h1>{isAuth ? 'Sign Up' : 'Sign In'}</h1>
            <Formik
              initialValues={isAuth ? AuthorizationInitialValue : RegistrationInitialValue}
              validationSchema={isAuth ? userAuthValidate : userRegistrationValidate}
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
                  isAuth && (
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
                <button type="submit">Submit</button>
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

export default memo(AuthModal);
