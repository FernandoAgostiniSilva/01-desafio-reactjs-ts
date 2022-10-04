import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
    createNewTask(content: string): void;
}

export function TaskForm({ createNewTask }: TaskFormProps) {

    const [taskContent, setTaskContent] = useState("");

    function handleSubmitNewTask(event: FormEvent) {
        event.preventDefault();
        createNewTask(taskContent);
        setTaskContent("");
    }

    function handleChangeInputTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTaskContent(event.target.value);   
    }

    function handleInvalidInput(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Preencha corretamente o título da tarefa.');
    }

    return (
        <form onSubmit={handleSubmitNewTask} className={styles.form} >
            <input type="text"
                placeholder="Adicione uma nova tarefa"
                value={taskContent}
                onChange={handleChangeInputTask}
                onInvalid={handleInvalidInput}
                required
            />
            <button type="submit" disabled={taskContent.length === 0}>
                Criar <PlusCircle size={21} />
            </button>
        </form>
    )
}