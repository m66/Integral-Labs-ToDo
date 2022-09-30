import style from "./listItem.module.scss";

const ListItem = ({
  toDo: { id, text, checked },
  onDelete,
  handleCheckboxChange,
}) => {
  return (
    <div className={style.listItem}>
      <div className={style.checkboxItem}>
        <input
          onChange={(e) => handleCheckboxChange(id, !checked)}
          className={style.checkbox}
          checked={checked}
          type="checkbox"
          id={id}
        />
        <label htmlFor={id}>{text}</label>
      </div>
      <button className={style.deleteBtn} onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default ListItem;
