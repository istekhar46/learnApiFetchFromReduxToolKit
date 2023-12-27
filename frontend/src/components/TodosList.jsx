import { setTodos } from "../slice/todosSlice";
import { useFetchTodosMutation } from "../slice/weatherApiSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const [todosPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { todos } = useSelector((state) => state.todosData);
  const [fetchTodos, { isLoading }] = useFetchTodosMutation();

  //? Define the number of pages dynamically
  const totalPages = todos ? Math.ceil(todos.todos.length / todosPerPage) : 0;


  const fetchData = async () => {
    try {
      const res = await fetchTodos().unwrap();
      dispatch(setTodos(res));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h4>Todos List</h4>
      {todos && todos.todos && (
        <div>
          {todos.todos
            .slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage)
            .map((todo) => (
              <p key={todo.id}>{todo.id}. {todo.todo}</p>
            ))}
        </div>
      )}

      <div>
        <button
          id="prev"
          style={{ margin: "10px", fontSize: "10px" }}
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({length:totalPages}).map((_,index) => (
          <button
            style={{ margin: "10px", fontSize: "10px" }}
            key={index}
            onClick={() => setCurrentPage(index +1)}
            disabled={currentPage === index +1 }
          >
            {index +1}
          </button>
        ))}
        <button
          style={{ margin: "10px", fontSize: "10px" }}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Todos;
