"use client";

import { add, del } from "./redux/reducer/todo-reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useState } from "react";

export default function Home() {
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return alert("Message required!!");
    dispatch(add({ id: Date.now(), name: text }));
    setText("");
  };

  const deleteItem = (id: number) => {
    dispatch(del(id));
  };
  return (
    <div className="w-[500px] mt-20 mr-auto ml-auto">
      <form className="flex gap-4" onSubmit={submit}>
        <input
          type="text"
          placeholder="Add Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-black outline-none px-3 "
        />
        <button className="border border-black rounded-sm px-4">Add</button>
      </form>
      <div className="w-80 mt-5 max-h-[50vh] overflow-y-auto">
        {todos.map((item: any) => (
          <div className="flex gap-16 border p-4 justify-between items-center mt-3 ">
            <div className="flex flex-col ">
              <h1 className="flex-wrap">{item.name}</h1>
            </div>
            <button
              className="border bg-rose-500 p-2 rounded-sm"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
