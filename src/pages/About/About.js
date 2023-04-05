import styles from "./About.module.scss"
import Title from "../../components/title/title";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faQuestion)

function About() {
    const icon = <FontAwesomeIcon icon="fa-solid fa-question" className={styles.icon} />
    return (
        <div className={styles.main}>
            <Title text={`Page About`} icon = {icon} />
        </div>
    );
}
export default About;