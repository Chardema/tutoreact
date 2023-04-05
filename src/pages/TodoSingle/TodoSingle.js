import title from "../../components/title/title";
import styles from "./TodoSingle.module.scss";
import {getTodoById, editTodo} from "../../api/Todos";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Title from "../../components/title/title";
import { useForm } from "react-hook-form";

function TodoSingle() {
    const [todo, setTodo] = useState({});
    const {id} = useParams();

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    async function onSubmit(data) {
        const todo = await editTodo(data,id);
        console.log(todo);
    }

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

            <h2>Créer un Todo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={todo.title} {...register("title", { required: true, maxLength: 20 })} /> <br/>
                {errors.title && errors.title.type === 'maxLength' && <span> le titre doit faire 20 caractères maximum</span>}
                {errors.title && errors.title.type === 'required' && <span> le titre ne peut pas être vide</span>}
                <br/>
                <input defaultValue={todo.checkbox} type="checkbox" {...register("completed", {})} /> <br/>
                <br/>
                <input type="hidden" defaultValue={1} {...register("userId", {})} /> <br/>

                <input type="submit"  disabled={!isValid}/>
            </form>

        </div>
    );
}
export default TodoSingle;