import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import AdminPanel from '../components/AdminPanel/AdminPanel';

const Admin = () => {
  return (
    <div>
      <MetaDecorator
        title='Admin | Healovo'
        description='The admin dashboard of Healovo medical booking website'
      />
      <AdminPanel />
      <h2>Admin</h2>
    </div>
  );
};

export default Admin;
