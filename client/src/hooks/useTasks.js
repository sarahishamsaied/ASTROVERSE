import { useCallback, useEffect, useState } from "react";

import {
  httpAddTask,
  httpGetTasks,
  httpGetTasksPerMonth,
  httpCompleteTask,
  httpUnCompleteTask,
} from "./requests";

function useTasks() {
  const [tasks, saveTasks] = useState([]);

  const getTasks = useCallback(async () => {
    const fetchedTasks = await httpGetTasks();
    saveTasks(fetchedTasks);
  }, []);
  const getTasksMonthly = useCallback(async () => {
    const fetchedTasks = await httpGetTasksPerMonth();
    console.log(fetchedTasks);
    return fetchedTasks;
  }, []);
  const addTask = useCallback(async (task) => {
    const addedTask = await httpAddTask(task);
    saveTasks(addedTask);
    await getTasks();
    return addedTask;
  }, []);
  const completeTask = useCallback(async (id) => {
    const completedTask = await httpCompleteTask(id);
    await getTasks();
  }, []);
  const unCompleteTask = useCallback(async (id) => {
    const unCompletedTask = await httpUnCompleteTask(id);
    await getTasks();
  }, []);
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return { tasks, addTask, getTasksMonthly, completeTask, unCompleteTask };
}

export default useTasks;
