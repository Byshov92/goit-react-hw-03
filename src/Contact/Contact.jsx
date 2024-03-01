import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  const handleClick = () => {
    onDeleteContact(id);
  };

  return (
    <li className={css.wrap}>
      <div className={css.wrrapText}>
        <p className={css.text}>Name: {name}</p>
        <p className={css.text}>Number: {number}</p>
      </div>
      <button className={css.button} onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
