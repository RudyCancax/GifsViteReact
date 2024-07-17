import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const onSubmitForm = (event)=>{
    event.preventDefault();
    if(inputValue.length === 0) return;
    onNewCategory(inputValue)
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChange}
        className="
          text-black 
            px-2 py-2
            rounded-lg 
            leading-6 w-full">
      </input>
    </form>
  )
}
