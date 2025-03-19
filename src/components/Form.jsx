import { useState, useRef } from "react";

function FormComponent() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Input cannot be empty");
      return;
    }
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
      <input 
        ref={inputRef}
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text" 
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => inputRef.current.focus()}>Focus Input</button>
    </form>
  );
}

export default FormComponent;
