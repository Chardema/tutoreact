import styles from "./Home.module.scss"
import Title from "../../components/title/title";
import React, {useEffect, useState} from "react";
import CardTodo from "../../components/CardTodo/CardTodo";
import {getTodos} from "../../api/Todos";

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodosLoad() {
            const todos = await getTodos();
            setTodos(todos);
        }
        getTodosLoad();
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.titles}>
                    <Title text={`Page d'accueil`} />
                </div>
                    <div class={styles.grid}>
                        {todos.map((todo, index) => (
                        <CardTodo title={todo.title} id={todo.id} key={index}/>
                        ))}
                    </div>
                </div>
        </div>
    );
}
export default Home;