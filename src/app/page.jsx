import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // SE PUEDE UTILIZAR LOS METODOS DE PRISMA YA QUE ESTA TODO DENTRO DEL MISMO PROYECTO
  return await prisma.task.findMany();

  //ESTA SERIA LA FORMA NORMAL UTILIZANDO LOS ENDPOINTS
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = await res.json();
  // return data;
}

const HomePage = async () => {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      {tasks.length === 0 && (
        <h1 className="text-2xl font-bold text-center mt-96">
          No hay tareas aun...
        </h1>
      )}
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
