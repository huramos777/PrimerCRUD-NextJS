"use client";
import { useRouter } from "next/navigation";
import React from "react";

const TaskCard = ({ task }) => {
  const router = useRouter();
  return (
    <div
      className="bg-slate-800 p-5 rounded-lg hover:bg-slate-700 hover:cursor-pointer"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h3 className="text-2xl font-bold mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
