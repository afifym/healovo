import React from 'react';
import SideNavigation from './SideNavigation/SideNavigation';
import styled from 'styled-components';
import ManagePatients from './ManageUsers/ManagePatients';
import ManageDoctors from './ManageUsers/ManageDoctors';
import { Route } from 'react-router-dom';
import AdminSummary from './AdminSummary/AdminSummary';
import ManageAppointments from './ManageAppointments/ManageAppointments';
import AdminLogin from './AdminLogin';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Wrapper = styled.div`
  position: relative;
  background-color: #f1f2f4;
  display: flex;
  height: 100%;
`;

const AdminPanel = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.push('/admin-login');
    } catch (error) {
      setError('Failed to Logout');
    }
  };

  return (
    <Wrapper>
      <SideNavigation />
      <div style={{ marginLeft: '15em', width: '100%' }}>
        <Route exact path='/admin' render={() => <AdminSummary />} />
        <Route
          path='/admin/patients'
          render={() => <ManagePatients users={'patients'} />}
        />
        <Route
          path='/admin/doctors'
          render={() => <ManageDoctors users={'doctors'} />}
        />
        <Route path='/admin/appointments' component={ManageAppointments} />
      </div>
    </Wrapper>
  );
};

export default AdminPanel;
