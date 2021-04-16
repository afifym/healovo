import React from 'react';
import AdminPanel from '../components/AdminPanel/AdminPanel';
import { Admin as ReactAdmin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

const Admin = () => {
  return (
    <ReactAdmin
      dataProvider={restProvider('https://healovo-default-rtdb.firebaseio.com')}
    >
      <AdminPanel />
    </ReactAdmin>
  );
};

export default Admin;
