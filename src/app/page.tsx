"use client";

import { add } from "./redux/reducer/todo-reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export default function Home() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!text.trim()) return;
    dispatch(add({ id: Date.now(), completed: false }));
    // setText("");
  };
  return (
    <div className="w-[500px] mt-20 mr-auto ml-auto">
      <form className="flex gap-4" onSubmit={submit}>
        <input
          type="text"
          placeholder="Add Text"
          className="border border-black outline-none px-3 "
        />
        <button className="border border-black rounded-sm px-4">Add</button>
      </form>
    </div>
  );
}
