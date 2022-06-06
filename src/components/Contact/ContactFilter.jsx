import s from './Contact.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.findContactLabel}>
      Find contacts by name
      <input
        className={s.findContactInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
