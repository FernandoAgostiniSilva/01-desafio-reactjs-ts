import styles from "./TaskCount.module.css";

interface TaskCount {
    countCreated: number;
    countCompleted: number;
}

export function TaskCount({ countCreated, countCompleted }: TaskCount) {
    return (
        <div className={styles.taskCount}>
            <div className={styles.countCreated}>
                <span>
                    Tarefas Criadas
                </span>
                <span className={styles.count}>
                    {countCreated}
                </span>
            </div>
            <div className={styles.countCompleted}>
                <span>
                    Concluídas
                </span>
                <span className={styles.count}>
                    {countCompleted} de {countCreated}
                </span>
            </div>
        </div>
    )
}