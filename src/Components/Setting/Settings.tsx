import styles from "../Style.module.css";
import {Button} from "../Button";
import {SettingValue} from "./SettingValue";

export type SettingsProps = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    setErrorDisplay: (errorDisplay: null | 'Incorrect value!') => void
    setSettingDisplay: (settingDisplay: null | 'Enter values and press "set"') => void
    setCount: (count: number) => void
    settingDisplay: null | 'Enter values and press "set"'
    errorDisplay: null | 'Incorrect value!'
}

export const Settings = (props: SettingsProps) => {
    const {maxValue, setMaxValue, startValue, setStartValue, setErrorDisplay, setSettingDisplay, setCount, settingDisplay, errorDisplay} = props;
    const buttonCallbackHandler = () => {
        setSettingDisplay(null);
        setCount(startValue)
    }
    const isDisableSetHandler = () => {
        if (errorDisplay || !settingDisplay) {
            return true
        }
    }

    return (
        <div className={styles.countContainer}>
            <SettingValue setStartValue={setStartValue} setMaxValue={setMaxValue} maxValue={maxValue} startValue={startValue} setSettingDisplay={setSettingDisplay} setErrorDisplay={setErrorDisplay} errorDisplay={errorDisplay}/>
            <div className={styles.buttonContainer}>
                <Button title={'set'} callback={buttonCallbackHandler} isDisable={isDisableSetHandler()}/>
            </div>
        </div>
    )
}