import styles from "./footer.module.scss"
function Footer() {
    return (
        <footer className={styles.main}>
            <div className={styles.container}>
            <div className={styles.column}>
                <h3 className={styles.title}>Column 1</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>Item 1</li>
                    <li className={styles.item}>Item 2</li>
                    <li className={styles.item}>Item 3</li>
                </ul>
            </div>

            <div className={styles.column}>
                <h3 className={styles.title}>Column 1</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>Item 1</li>
                    <li className={styles.item}>Item 2</li>
                    <li className={styles.item}>Item 3</li>
                </ul>
            </div>

            <div className={styles.column}>
                <h3 className={styles.title}>Column 1</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>Item 1</li>
                    <li className={styles.item}>Item 2</li>
                    <li className={styles.item}>Item 3</li>
                </ul>
            </div>
            </div>
        </footer>
    );
}
export default Footer;