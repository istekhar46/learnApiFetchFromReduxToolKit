import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAddTodo = () => {
    setTodo((prev) => [...prev, { text }]);
  };

  // console.log(todo);

  return (
    <div className="container">
      <div className="border m-3 p-3 bg-[#BFD3C1] rounded-md">
        <input
          type="text"
          className="text-[20px] w-full focus:outline-none rounded-sm
            p-3 bg-[#6E6E6E]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="bg-gray-500 mt-3"
          onClick={handleAddTodo}
        >
          Set Todo{" "}
        </button>
      </div>
      <div >
        <h2>Your Todos are:</h2>
        <div className="flex justify-center">
          <li >
            {todo.map((item, index) => (
              <ul key={index} className="text-start border m-3 p-3 rounded-md bg-[#BFD3C1] text-gray-800 font-semibold" >{item.text}</ul>
            ))}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Todo;
