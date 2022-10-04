import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
    createdAt: Date;
    complete?: boolean;
    content: string;
    removeTask(createdAt: Date):void;
    toggleStatusTask(createdAt: Date): void;
}

export function Task({ complete, content, createdAt, removeTask, toggleStatusTask }: TaskProps) {

    function handleDeleteTaskButton() {
        removeTask(createdAt);
    }

    function handleToggleTaskButton() {
        toggleStatusTask(createdAt);
    }

    return (
        <div className={styles.task + ' ' + (complete && styles.checked)}>
            <button className={styles.btnCheck} onClick={handleToggleTaskButton}>
                <Check size={12} className={styles.checkIcon} weight="bold" />
            </button>
            <p className={styles.content}>
                {content}
            </p>
            <button className={styles.btnDelete} onClick={handleDeleteTaskButton}>
                <Trash size={20} />
            </button>
        </div>
    )
}