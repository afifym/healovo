import React, { useState } from 'react';
import UsersList from './UsersList/UsersList';
import AddPatients from './AddUser/AddPatients';

const ManagePatients = ({ users }) => {
  const [fetch, setFetch] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <AddPatients
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

export default ManagePatients;
