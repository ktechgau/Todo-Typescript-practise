import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; //This defines this function as returning nothing
}

// Remember we use interface to extend the types. We have defined Props types and assignend it to the todo and setTodo.
//setTodo type was grabbed from hovering over the 'setTodo' in the Apps.tsx and copy and pasted.

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); //TS defined useRef as a HTMLInputElement
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      {/* Blur shifts the focus */}
      {/* On submit, pressing go, it will fire off the handleAdd function */}
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input_box"
        value={todo} //provide the value of the todo
        onChange={
          // onChange it will change the state
          (e) => setTodo(e.target.value)
        }
      />
      <button className="input_submit" type="submit">
        {" "}
        GO
      </button>
    </form>
  );
};

export default InputField;
