import {Routes, Route} from 'react-router-dom';
import TodoSingle from "pages/TodoSingle/TodoSingle";
import Home from "pages/Home/Home";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import styles from "./layout.module.scss";
function Layout() {
    return (
        <div className={styles.Layout}>
            <Header/>
            <div className={styles.container}>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='todo/:id' element={<TodoSingle />} />
            </Routes>
            </div>
            <br/>
            <Footer/>
        </div>
    );
}

export default Layout;