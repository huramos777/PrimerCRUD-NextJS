import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
const { task } = prisma;

export const GET = async (request, { params }) => {
  const { id } = params;
  const taskById = await task.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(taskById);
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const data = await request.json(); // aca lo paso asi en vez de desestructurarlo, porque asi se actualiza el dato que me pasen y no es obligatorio que me pasen los dos(title y description)
  const updateTask = await task.update({
    where: { id: Number(id) },
    data: data,
  });
  return NextResponse.json(updateTask);
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await task.delete({ where: { id: Number(id) } });
    return NextResponse.json(`se elimino la tarea con el id: ${id}`);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
