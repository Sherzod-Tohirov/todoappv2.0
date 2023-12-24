import { Item } from "../Item";
import { motion } from "framer-motion"
export const List = ({todo, setTodo}) => {

  return (
    <>
    <ul className="flex flex-col items-center justify-center gap-4 w-full">
      {
        todo.length ? todo.map(item => {
          return <Item key={item?.id} data={item} todo={todo} setTodo={setTodo} />
        }) : <li className="text-white text-4xl opacity-50 select-none">No todo yet !</li>
      }
    </ul>

    </>
  );
};
