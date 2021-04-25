import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import ProfilePage from '../container/ProfilePage';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import DoctorProfile from '../container/DoctorProfile';
import PatientProfile from '../container/PatientProfile';
import DashboardNav from '../components/DashboardNav/DashboardNav';
import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: #f1f2f4;
`;

const Dashboard = () => {
  const isDoctor = useSelector((state) => state.auth.isDoctor);
  const isPatient = useSelector((state) => state.auth.isPatient);

  return (
    <Wrapper>
      <MetaDecorator title='Dashboard' description='A dashboard for users' />
      {isDoctor || (isPatient && <DashboardNav />)}
      {isDoctor && <DoctorProfile />}
      {isPatient && <PatientProfile />}
    </Wrapper>
  );
};

export default Dashboard;
