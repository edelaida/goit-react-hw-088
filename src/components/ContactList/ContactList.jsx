import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
// import { selectFilteredContacts } from "../../redux/contacts/slice";
// import { deleteContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
}

// const dispatch = useDispatch();

// const handleDelete = (userId) => {
//   dispatch(deleteContact(userId));
// };
// const filteredArray = useSelector(selectFilteredContacts);
//   return (
//     <div>
//       <h3>ContactList</h3>
//       <ul>
//         {Array.isArray(filteredArray) &&
//           filteredArray.map((user) => {
//             return (
//               <Contact key={user.id} user={user} handleDelete={handleDelete} />
//             );
//           })}
//       </ul>
//     </div>
//   );
// }

// export default ContactList;
