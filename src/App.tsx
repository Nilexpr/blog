import { createSignal } from "solid-js";
function App() {
  const [count, setCount] = createSignal<number>(1);

  return (
    <>
      <div>Nilexpr's Blog {count()}</div>
      <button onclick={() => setCount(count() + 1)}>BTN</button>
    </>
  );
}

export default App;
