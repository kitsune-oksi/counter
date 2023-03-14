import {Display} from "./Display";
import {Button} from "../Button";
import styles from '../Style.module.css'

type CounterProps = {
    count: number
    setCount: (count: number) => void
    maxValue: number
    startValue: number
    errorDisplay: null | 'Incorrect value!'
    settingDisplay: null | 'Enter values and press "set"'
}

export const Counter = (props: CounterProps) => {
    const {count, setCount, startValue, maxValue, settingDisplay, errorDisplay} = props;

    const  onIncreaseHandle = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const onResetHandler = () => {
        setCount(startValue)
    }

    const isDisableIncHandle = () => {
        if (errorDisplay || settingDisplay) {
            return true
        }
        if (count !== undefined) {
            return count === maxValue
        }
    }

    const isDisableResetHandle = () => {
        if (errorDisplay || settingDisplay) {
            return true
        }
        if (count !== undefined) {
            return count === startValue
        }
    }

    return (
        <div className={styles.countContainer}>
            <Display count={count} maxValue={maxValue} errorDisplay={errorDisplay} settingDisplay={settingDisplay}/>
            <div className={styles.buttonContainer}>
                <Button title={'inc'} callback={onIncreaseHandle} isDisable={isDisableIncHandle()}/>
                <Button title={'reset'} callback={onResetHandler} isDisable={isDisableResetHandle()}/>
            </div>
        </div>
    )
}