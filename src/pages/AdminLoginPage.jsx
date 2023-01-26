import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import AdminLogin from '../components/AdminPanel/AdminLogin';

const AdminLoginPage = () => {
  return (
    <div>
      <MetaDecorator
        title='Admin Login | Healovo'
        description='The Admin Login of a medical booking website'
      />
      <AdminLogin />
    </div>
  );
};

export default AdminLoginPage;
