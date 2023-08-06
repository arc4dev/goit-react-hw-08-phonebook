import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { List } from '@mui/material';

export const ContactList = ({ handleClick }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {error && <p>{error}</p>}

      {isLoading ? (
        <p>Loading contacts...</p>
      ) : visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <ContactItem
            key={contact.name}
            contact={contact}
            handleClick={handleClick}
          />
        ))
      ) : (
        <p>You don't have any contacts!</p>
      )}
    </List>
  );
};
