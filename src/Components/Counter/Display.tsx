import styles from "../Style.module.css";

type DisplayPropsType = {
    count: number
    maxValue: number
    errorDisplay: null | 'Incorrect value!'
    settingDisplay: null | 'Enter values and press "set"'
}

export const Display = (props: DisplayPropsType) => {
    const {count, maxValue, settingDisplay, errorDisplay} = props;

    return (
        <div className={styles.display}>
            {errorDisplay ?
                <div className={`${styles.settingDisplay} ${styles.warning}`}>
                    {errorDisplay}
                </div>
                :
                settingDisplay ?
                    <div className={styles.settingDisplay}>
                        {settingDisplay}
                    </div>
                    :
                    <div className={`${styles.countDisplay} ${count === maxValue ? styles.warning : ''}`}>
                        {count}
                    </div>}
        </div>

    )
}