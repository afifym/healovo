import { useState } from 'react';
import AppointmentsList from '../ManageAppointments/AppointmentsList';
import UserList from '../ManageUsers/UsersList/UsersList';

const AdminSummary = () => {
  const [fetch, setFetch] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedPatients, setSelectedPatients] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <UserList
        users='patients'
        noselect
        update={update}
        setUpdate={setUpdate}
        fetch={fetch}
        setFetch={setFetch}
        selected={selectedPatients}
        setSelectedPatients={setSelectedPatients}
      />
      <UserList
        users='doctors'
        noselect
        update={update}
        setUpdate={setUpdate}
        fetch={fetch}
        setFetch={setFetch}
        selected={selectedDoctors}
        setSelectedPatients={setSelectedDoctors}
      />
      <AppointmentsList
        noselect
        selected={selected}
        setSelected={setSelected}
        fetch={fetch}
        setFetch={setFetch}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default AdminSummary;
