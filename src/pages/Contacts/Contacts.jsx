import { Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';

export const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Typography variant="h3">PhoneBook</Typography>
      <ContactForm />
      <Typography variant="h4">Contacts</Typography>
      <Filter />
      <ContactList />
    </div>
  );
};
