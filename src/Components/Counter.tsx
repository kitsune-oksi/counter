import {Display} from "./Display";
import {useState} from "react";
import {Button} from "./Button";
import styles from './Style.module.css'

export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const onIncreaseHandle = () => {
        if (count < 5) {
            setCount(count+1)
        }
    }
    const onResetHandler = () => {
        setCount(0)
    }

    const isDisableIncHandle = () => {
        if (count !== undefined) {
            return count === 5
        }
    }

    const isDisableResetHandle = () => {
        if (count !== undefined) {
            return count === 0
        }
    }

    return (
        <div className={styles.countContainer}>
            <Display count={count}/>
            <div className={styles.buttonContainer}>
                <Button title={'inc'} callback={onIncreaseHandle} isDisable={isDisableIncHandle()}/>
                <Button title={'reset'} callback={onResetHandler} isDisable={isDisableResetHandle()}/>
            </div>
        </div>
    )
}