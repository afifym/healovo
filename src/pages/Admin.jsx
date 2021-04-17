import AddUser from '../components/AdminPanel/AddUser';
import UsersList from '../components/AdminPanel/UsersList';

const Admin = () => {
  return (
    <div>
      <AddUser />
      <UsersList users='patients' />
    </div>
  );
};

export default Admin;
