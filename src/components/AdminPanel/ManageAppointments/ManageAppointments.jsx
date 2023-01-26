import { useState } from 'react';
import AddAppointment from './AddAppointment';
import AppointmentsList from './AppointmentsList';
import UserList from '../ManageUsers/UsersList/UsersList';

const ManageAppointments = () => {
  const [fetch, setFetch] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedPatients, setSelectedPatients] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <AddAppointment update={update} fetch={fetch} setFetch={setFetch} />
      <AppointmentsList
        selected={selected}
        setSelected={setSelected}
        fetch={fetch}
        setFetch={setFetch}
        setUpdate={setUpdate}
      />
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
    </div>
  );
};

export default ManageAppointments;
