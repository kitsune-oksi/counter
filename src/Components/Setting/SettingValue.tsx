import {ChangeEvent, useEffect} from "react";
import styles from "../Style.module.css";

type SettingValueType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    setErrorDisplay: (errorDisplay: null | 'Incorrect value!') => void
    setSettingDisplay: (settingDisplay: null | 'Enter values and press "set"') => void
    errorDisplay: null | 'Incorrect value!'
}

export const SettingValue = (props: SettingValueType) => {
    const {setMaxValue, setStartValue, maxValue, startValue, setErrorDisplay, setSettingDisplay, errorDisplay} = props;

    const maxValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
        setSettingDisplay('Enter values and press "set"')
    }

    const startValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
        setSettingDisplay('Enter values and press "set"')
    }
    useEffect(() => {
        if (startValue < 0) {
            setErrorDisplay('Incorrect value!')
        }
        if (errorDisplay && startValue > 0) {
            setErrorDisplay(null)
        }

    }, [startValue])

    return (
        <div className={styles.settings}>
            <div>
                <span>max value: </span>
                <input type={"number"} value={maxValue} onChange={maxValueOnChangeHandler}/>
            </div>
            <div>
                <span>start value: </span>
                <input type={"number"} value={startValue} onChange={startValueOnChangeHandler}/>
            </div>
        </div>
    )
}