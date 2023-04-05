import styles from "./title.module.scss"

function Title(props) {
    return (
        <h1 className={styles.title}>{props.text} {props.icon}</h1>
    );
}
export default Title;