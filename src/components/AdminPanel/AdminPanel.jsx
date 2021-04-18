import React, { useState } from 'react';
import SideNavigation from './SideNavigation/SideNavigation';

import styled from 'styled-components';
import ManageUsers from './ManageUsers/ManageUsers';
import ManagePatients from './ManageUsers/ManagePatients';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminSummary from './AdminSummary/AdminSummary';

const Wrapper = styled.div`
  background-color: #f1f2f4;
`;

const AdminPanel = () => {
  return (
    <Wrapper>
      <SideNavigation />
      <Router>
        <Switch>
          <Route exact path='/admin' render={() => <AdminSummary />} />
          <Route
            exact
            path='/admin/patients'
            render={() => <ManagePatients users={'patients'} />}
          />
          <Route
            exact
            path='/admin/doctors'
            render={() => <ManageUsers users={'doctors'} />}
          />
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default AdminPanel;
