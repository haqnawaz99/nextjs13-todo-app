export default function page() {
  return (
    <div>
      <div>
        <input type="text" />
        <button>Add</button>
        <ul style={{ listStyleTupe: "none", padding: 0 }}>
          <li style={{ padding: "5px 0" }}>Todo 1</li>
          <li style={{ padding: "5px 0" }}>Todo 2</li>
          <li style={{ padding: "5px 0" }}>Todo 3</li>
        </ul>
      </div>
    </div>
  );
}