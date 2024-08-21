"use client";
import Header from "@/components/Header";
import TodoHero from "@/components/TODOHero";
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const totalTasks = tasks.length;
  const tasksCompleted = tasks.filter(
    (task) => task.is_completed === true
  ).length;
  return (
    <div className="wrapper">
      <Header />
      <TodoHero totalTasks={totalTasks} tasksCompleted={tasksCompleted} />
      <Form setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
