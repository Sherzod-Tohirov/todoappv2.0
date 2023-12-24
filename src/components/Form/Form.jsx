import { IoEnterOutline } from "react-icons/io5";
export const Form = ({todo, setTodo}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    const inputValue = evt.target[0].value.trim();
    evt.target[0].value = '';
    const newData = [...todo, {
      id: todo.length ? todo.at(-1).id + 1 : 1,
      title: inputValue,
      isCompleted: false
    }]; 
    setTodo(newData);
    localStorage.setItem('todo', JSON.stringify(newData));
  }
  return (
    <form className="flex gap-3 mb-20" onSubmit={handleSubmit}>
      <input
        className=" w-[400px] p-4 rounded-md"
        type="text"
        placeholder="Enter todo name here..."
        aria-label="Enter todo name"
        required
      />
      <button
        className="px-7 bg-black text-white rounded-md flex items-center gap-3 active:scale-90 transition"
        type="submit"
      >
        <IoEnterOutline size={20} /> Submit
      </button>
    </form>
  );
};
