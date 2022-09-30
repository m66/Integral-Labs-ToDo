import { useState } from "react";

import style from "./addForm.module.scss";

const AddForm = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(text);
        setText("");
      }}
      className={style.addForm}
    >
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button className={style.submitButton} disabled={!text}>
        Add
      </button>
    </form>
  );
};

export default AddForm;
