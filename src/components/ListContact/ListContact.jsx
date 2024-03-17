import { useDispatch, useSelector } from 'react-redux';
import css from './list.module.css';
import { getFilteredContacts } from 'store/selectors/selectors';
import { deleteContact } from 'store/contacts/thunk';

const ListContact = () => {
  const contacts = useSelector(getFilteredContacts);
  const distpatch = useDispatch();

  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.items}>
          {contacts.map(({ id, name, number }) => (
            <li className={css.list} key={id}>
              <div>
                <p className={css.text}>Name: {name}</p>
                <p className={css.text}>Number: {number}</p>
              </div>

              <button
                className={css.btn}
                id={id}
                onClick={() => distpatch(deleteContact(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};

export default ListContact;
