import React, { useState } from 'react';
import UsersList from './UsersList/UsersList';
import AddPatients from './AddUser/AddPatients';

const ManageUsers = ({ users }) => {
  const [fetch, setFetch] = useState(false);

  return (
    <div>
      <AddPatients fetch={fetch} setFetch={setFetch} />
      <UsersList users={users} fetch={fetch} setFetch={setFetch} />
    </div>
  );
};

export default ManageUsers;
