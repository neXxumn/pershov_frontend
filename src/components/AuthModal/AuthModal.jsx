import { React, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';

import { REGISTRATION } from '../../redux/constants';

import { toggleModal } from '../../redux/actions';

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

const AuthorizationInitialValue = {
  email: '',
  name: '',
  password: '',
};

const RegistrationInitialValue = {
  email: '',
  password: '',
};

function TransitionsModal(props) {
  const { name, modalType } = props;

  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.auth.isModalOpen);

  const isAuth = modalType === REGISTRATION;

  const handleOpen = () => {
    dispatch(toggleModal({ isModalOpen: true, modalType: '' }));
  };

  const handleClose = () => {
    dispatch(toggleModal({ isModalOpen: false, modalType: '' }));
  };

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
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
              initialValue={isAuth ? AuthorizationInitialValue : RegistrationInitialValue}
            >
              <Form>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="email"
                />

                <label htmlFor="name">Name</label>
                {
                  !isAuth && (
                    <Field
                      id="name"
                      name="name"
                      placeholder="email"
                    />
                  )
                }
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
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

TransitionsModal.propTypes = {
  name: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
};

export default memo(TransitionsModal);
