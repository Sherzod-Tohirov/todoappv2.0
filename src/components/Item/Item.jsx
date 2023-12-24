import { LuFolderEdit } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
export const Item = ({data, todo, setTodo}) => {
  function handleEdit(evt) {
    const newVal = prompt("Enter new value: ").trim();
    const foundItem = todo.find(item => item.id == evt.target.dataset.id);
    foundItem.title = newVal;
    setTodo([...todo]);
    localStorage.setItem('todo', JSON.stringify(todo));
  }

  function handleDelete(evt) {
    const newData = [...todo.filter(item => item.id != evt.target.dataset.id)];
    setTodo(newData);
    localStorage.setItem('todo', JSON.stringify(newData));
  }

  function handleChecked(evt) {
    const foundItem = todo.find(item => item.id == evt.target.dataset.id);
    foundItem.isCompleted = !foundItem.isCompleted;
    setTodo([...todo]);
    localStorage.setItem('todo', JSON.stringify(todo));
  }

  return (
    <li className="w-[550px] bg-white rounded-md pl-4 flex items-center">
      <input
        defaultChecked={data?.isCompleted}
        onChange={handleChecked}
        className="mr-4 w-4 h-4 rounded-lg accent-stone-600 cursor-pointer"
        type="checkbox"
        name="complete"
        data-id={data?.id}
      />
      <span className={`text-slate-600 ${data?.isCompleted ? 'line-through' : ''}`}>{data?.title}</span>
      <div className="flex items-center ml-auto">
        <button className="flex h-full px-6 py-4 bg-sky-400 text-white transition active:scale-90 items-center gap-1" data-id={data?.id} onClick={handleEdit}>
          <LuFolderEdit /> EDIT
        </button>
        <button className="flex h-full px-6 py-4 bg-red-600 text-white transition active:scale-90 items-center gap-1" data-id={data?.id} onClick={handleDelete}>
          <MdOutlineDelete size={20} /> DELETE
        </button>
      </div>
    </li>
  );
};
