import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/todoSlice";
import { selectTodos, selectCompletedTodos } from "./redux/selectors";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <Form.Label>Liste des taches</Form.Label>
      <Form.Control
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <Button onClick={handleAddTodo}>Ajouter</Button>
      <ListGroup>
        <Form.Label>Tâches terminées</Form.Label>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </ListGroup.Item>
        ))}
        
        <ListGroup.Item>
          {completedTodos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default App;
