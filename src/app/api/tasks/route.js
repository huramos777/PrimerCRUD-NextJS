import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
const { task } = prisma;

export const GET = async () => {
  const tasks = await task.findMany();

  return NextResponse.json(tasks);
};

export const POST = async (request) => {
  const { title, description } = await request.json();
  const newTask = await task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newTask);
};
