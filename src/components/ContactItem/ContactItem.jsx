import { Avatar, Button, ListItem, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = e => dispatch(deleteContact(contact.id));

  return (
    <ListItem>
      <Avatar sx={{ mr: 2 }} />
      <ListItemText primary={contact.name} secondary={contact.number} />
      <Button onClick={handleDelete}>Delete</Button>
    </ListItem>
  );
};

export default ContactItem;
