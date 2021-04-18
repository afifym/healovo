import React, { useState } from 'react';
import UsersList from './UsersList/UsersList';
import AddUser from './AddUser/AddUser';

const ManageUsers = ({ users }) => {
  const [fetch, setFetch] = useState(false);

  return (
    <div>
      <AddUser users={users} fetch={fetch} setFetch={setFetch} />
      <UsersList users={users} fetch={fetch} setFetch={setFetch} />
    </div>
  );
};

export default ManageUsers;
