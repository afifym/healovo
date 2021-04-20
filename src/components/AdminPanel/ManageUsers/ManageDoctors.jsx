import React, { useState } from 'react';
import UsersList from './UsersList/UsersList';
import AddDoctors from './AddUser/AddDoctors';

const ManageDoctors = ({ users }) => {
  const [fetch, setFetch] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <AddDoctors
        selected={selected}
        update={update}
        fetch={fetch}
        setFetch={setFetch}
      />
      <UsersList
        users={users}
        setUpdate={setUpdate}
        fetch={fetch}
        setFetch={setFetch}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default ManageDoctors;
