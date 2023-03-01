import styles from "./Style.module.css";

type DisplayPropsType = {
    count: number
}

export const Display = (props: DisplayPropsType) => {
    const {count} = props;
    return (
        <div className={`${styles.display} ${count === 5 ? styles.limitCount : ''}`}>
            {count}
        </div>
    )
}