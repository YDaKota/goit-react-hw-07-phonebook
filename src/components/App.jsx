import { useEffect } from 'react';
import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import ContactFilter from './ContactFilter/ContactFilter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getIsLoading} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(getIsLoading);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Container>
        <h1>Phonebook</h1>
          <ContactForm />
        <h1>Contacts</h1>
        {contacts.length > 0 && (
          <ContactFilter />
        )}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>Please add first contact</p>
        )}
        { isLoading && <p>Loading...</p> }
      </Container>
    );
}

export default App;
