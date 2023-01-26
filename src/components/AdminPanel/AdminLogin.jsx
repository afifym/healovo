import {
  Box,
  Card,
  Divider,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import GradientButton from '../shared/GradientButton/GradientButton';
import { IoMdLogIn } from 'react-icons/io';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Alert(props) {
  return (
    <MuiAlert
      style={{ margin: '0 1em', width: '500px', transition: 'all 0.2s ease' }}
      variant='filled'
      {...props}
    />
  );
}

const Wrapper = styled.div`
  background-image: url('/assets/images/curious-bg.svg');
  background-position: bottom bottom;
  background-size: 100% 100vw;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AdminLogin = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: 'admin@healovo.com',
    password: 'healovo',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError('');
      await login(formData.email, formData.password);
      history.push('/admin');
    } catch (error) {
      setError('Failed to Login', error);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Link to='/'>
        <Box display='flex' alignItems='center' justifyContent='center' my={4}>
          <img
            src='/assets/images/healovo-black.svg'
            alt='healovo'
            style={{ width: '200px' }}
          />
        </Box>
      </Link>
      <Card style={{ minHeight: '500px', width: '550px' }}>
        <Box
          flexDirection='column'
          display='flex'
          alignItems='center'
          style={{ height: '300px' }}
          m={7}
          mx={10}
        >
          <Divider />

          <form
            style={{ height: '100%', width: '100%' }}
            onSubmit={handleSubmit}
          >
            <Typography
              style={{
                fontWeight: '700',
                textAlign: 'center',
                margin: '1em 0',
              }}
              variant='h4'
              color='primary'
            >
              Admin Login
            </Typography>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              style={{ height: '100%', width: '400px' }}
            >
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                flexDirection='column'
                style={{ height: '100%', width: '300px' }}
                my={10}
                mt={1}
              >
                <TextField
                  fullWidth
                  required
                  type='email'
                  id='email'
                  label='Email'
                  value={formData.email}
                  variant='outlined'
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  required
                  type='password'
                  id='password'
                  label='Password'
                  variant='outlined'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </Box>

              <GradientButton
                disabled={loading}
                type='submit'
                icon={<IoMdLogIn color='white' size={15} />}
              >
                Login
              </GradientButton>
              {error !== '' && (
                <Alert severity='error' style={{ margin: '0.5em 0' }}>
                  {error}
                </Alert>
              )}
            </Box>
            {loading && <LinearProgress />}
          </form>
        </Box>
      </Card>
    </Wrapper>
  );
};

export default AdminLogin;
