import { FaArrowLeft } from "react-icons/fa";
import classes from './navigation.module.css';

export default function Navigation() {
    return (
        <div className={classes.area}>
            <FaArrowLeft />
            <h1>Back</h1>
        </div>
    );
}