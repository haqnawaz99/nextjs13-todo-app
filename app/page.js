import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

export default function page() {
  return (
    <div>
      <div>
        <AddNewTodo />
        <TodoList />
      </div>
    </div>
  );
}
