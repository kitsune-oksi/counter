import styles from "./Style.module.css";

type ButtonPropsType = {
    title: string
    callback: () => void
    isDisable?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const {title, callback, isDisable} = props;
    return (
        <button className={`${styles.button} ${isDisable ? styles.disableButton : ''}`} onClick={callback}>{title}</button>
    )
}