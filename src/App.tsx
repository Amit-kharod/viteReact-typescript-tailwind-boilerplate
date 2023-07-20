import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full h-[100vh] items-center justify-center text-2xl text-gray-700">
        React + Typescript + Tailwind = 💪
      </div>
    </>
  );
}

export default App;
