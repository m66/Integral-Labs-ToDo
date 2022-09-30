import { useEffect, useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import List from "./components/List/List";

import style from "./App.module.scss";

function App() {
  const [toDoes, setToDoes] = useState(
    localStorage.getItem("toDoes")
      ? JSON.parse(localStorage.getItem("toDoes"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("toDoes", JSON.stringify(toDoes));
  }, [toDoes]);

  const handleSubmit = (text) => {
    setToDoes((prev) => {
      return [
        ...prev,
        {
          id: new Date().getTime(),
          text: text,
          checked: false,
        },
      ];
    });
  };

  const onDelete = (deletedId) => {
    setToDoes((prev) => prev.filter((item) => item.id !== deletedId));
  };

  const handleCheckboxChange = (id, checked) => {
    const newToDoes = toDoes.map((todo) =>
      todo.id === id ? { ...todo, checked } : todo
    );
    setToDoes(newToDoes);
  };

  return (
    <div className={style.App}>
      <ContentHeader />
      <List
        toDoes={toDoes}
        onDelete={onDelete}
        handleCheckboxChange={handleCheckboxChange}
      />
      <hr/>
      <AddForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
