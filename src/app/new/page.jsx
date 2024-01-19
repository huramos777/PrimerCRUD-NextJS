"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 w-1/4">
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Escribe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button type="submit" className="bg-indigo-500 px-3 py-1 text-white">
            Crear
          </button>
          {params.id && (
            <button
              type="button"
              className="bg-red-500 px-3 py-1 text-white"
              onClick={async () =>
                await fetch(`/api/tasks/${params.id}`, { method: "DELETE" })
                  .then(() => router.push("/"))
                  .then(() => router.refresh())
              }
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
