import React, { useState } from 'react';
import SideNavigation from './SideNavigation/SideNavigation';

import styled from 'styled-components';
import ManageUsers from './ManageUsers/ManageUsers';
import ManagePatients from './ManageUsers/ManagePatients';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminSummary from './AdminSummary/AdminSummary';
import ManageAppointments from './ManageAppointments/ManageAppointments';

const Wrapper = styled.div`
  background-color: #f1f2f4;
  display: flex;
`;

const AdminPanel = () => {
  return (
    <Wrapper>
      <SideNavigation />
      <div style={{ marginLeft: 'auto', width: '100%' }}>
        <Router>
          <Switch>
            <Route exact path='/admin' render={() => <AdminSummary />} />
            <Route
              path='/admin/patients'
              render={() => <ManagePatients users={'patients'} />}
            />
            <Route
              path='/admin/doctors'
              render={() => <ManageUsers users={'doctors'} />}
            />
            <Route path='/admin/appointments' component={ManageAppointments} />
          </Switch>
        </Router>
      </div>
    </Wrapper>
  );
};

export default AdminPanel;
