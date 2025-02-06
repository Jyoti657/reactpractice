import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enterTask, setEnterTask] = useState("");
  function handleChange(event) {
    setEnterTask(event.target.value);
  }
  function handleClick() {
    if (enterTask.trim() === "") {
      return;
    }
    onAdd(enterTask);
    setEnterTask("");
  }
  return (
    <>
      <div className=" flex items-center gap-4">
        <input
          type="text"
          onChange={handleChange}
          value={enterTask}
          className=" w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-400"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
