import React, { useEffect, useState } from 'react';
import AddUser from './AddUser/AddUser';
import UsersList from './UsersList/UsersList';

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
