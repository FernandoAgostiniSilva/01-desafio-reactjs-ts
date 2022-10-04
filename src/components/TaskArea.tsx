import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import styles from "./TaskArea.module.css";

interface Task {
    createdAt: Date;
    complete?: false | boolean;
    content: string;
}

interface TaskAreaProps {
    listTasks: Task[];
    removeTask(createdAt: Date): void;
    toggleStatusTask(createdAt: Date): void;
}

export function TaskArea({ listTasks, removeTask, toggleStatusTask }: TaskAreaProps) {
    const sortedList = [...listTasks];
    sortedList.sort((task) => task.complete ? 1 : -1);
    const countCreated = listTasks.length;
    const countCompleted = listTasks.filter((task) => task.complete).length;
    return (
        <div className={styles.taskArea}>
            <TaskCount countCompleted={countCompleted} countCreated={countCreated} />
            <section className={styles.tasksList}>
                {
                    sortedList.map((task) => {
                        return <Task {...task}
                            removeTask={removeTask}
                            toggleStatusTask={toggleStatusTask}
                            key={String(task.createdAt.getTime()) + task.content} />
                    })
                }
            </section>
        </div>
    )
}