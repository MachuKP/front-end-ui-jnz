import styles from "@/components/card.module.scss";

interface PropsType {
  amount: number,
  element: JSX.Element,
  label: string
}

export default function Card(props: PropsType) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {props.element}{props.label}
      </div>
      <div className={styles.amountContainer}>
        {props.amount}
      </div>
      <div className={styles.label}>
        {props.label}
      </div>
    </div>
  );
}
