import ListItem from "./ListItem/ListItem";

import style from "./list.module.scss";

const List = ({ toDoes, onDelete, handleCheckboxChange }) => {
  return (
    <div className={style.list}>
      {toDoes.length === 0 ? (
        <h1 className={style.emptyList}>Empty ToDo List</h1>
      ) : (
        toDoes.map((toDo) => (
          <ListItem
            handleCheckboxChange={handleCheckboxChange}
            onDelete={onDelete}
            key={toDo.id}
            toDo={toDo}
          />
        ))
      )}
    </div>
  );
};

export default List;
