import title from "../../components/title/title";
import styles from "./TodoSingle.module.scss";
import {getTodoById} from "../../api/Todos";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Title from "../../components/title/title";

function TodoSingle() {
    const [todo, setTodo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function getTodoLoadById(id) {
            const todo = await getTodoById(id);
            setTodo(todo);
        }
        getTodoLoadById(id)
    }, [id]);

    return (
        <div className={styles.main}>
                <Title text={todo.title} icon={true}/>

            {todo.completed ? <p>Completed</p> : <p>Not completed</p>}
        </div>
    );
}
export default TodoSingle;