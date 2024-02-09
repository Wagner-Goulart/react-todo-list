import { useState, FormEvent, ChangeEvent, KeyboardEvent } from "react";

const useForm = (todoHandler: (text: string) => void) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleState = () => {
    if (!text) {
      return;
    }

    todoHandler(text);
    setText("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleState();
    }
  };

  return {
    text,
    setText,
    handleSubmit,
    handleChange,
    handleState,
    handleKeyPress,
  };
};


export { useForm }
