import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Box, Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = +form.elements.number.value;

    const isDuplicate = contacts.some(contact => contact.name === name);

    if (isDuplicate) return alert('Contact with the same name already exists!');

    dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <Box
      sx={{
        my: 1,
        display: 'block',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextField
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit" variant="contained">
            Add Contact
          </Button>
        </Box>
      </form>
    </Box>
  );
};
