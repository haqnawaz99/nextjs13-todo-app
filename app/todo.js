"use client";
export default function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" />
      {todo.name}
      <button onChange={() => {}}>Delete</button>
    </div>
  );
}
