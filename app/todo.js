"use client";

import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  await fetch(`http://localhost:3001/api/todo/update`, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      {todo.name}
      <button>Delete</button>
    </div>
  );
}
