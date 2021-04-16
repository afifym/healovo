import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DataField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const PatientList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EditButton basePath='/patients' />
        <DeleteButton basePath='/patients' />
      </Datagrid>
    </List>
  );
};

export default PatientList;
