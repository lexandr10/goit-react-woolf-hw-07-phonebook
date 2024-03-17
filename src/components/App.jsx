import Form from './Form/Form';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { getContacts } from 'store/contacts/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoading } from 'store/selectors/selectors';
import { Loader } from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form />

      {!error ? (
        <>
          <Filter />
          <ListContact />
        </>
      ) : (
        <p>Something error</p>
      )}
      {loading && <Loader />}
    </div>
  );
};
export default App;
