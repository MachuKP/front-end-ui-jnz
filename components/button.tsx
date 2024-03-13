import styles from "@/components/button.module.scss";

interface PropsType {
  iconActive?: JSX.Element;
  iconInactive: JSX.Element;
  label: string;
  active?: boolean;
  handleClick?: () => void;
}

export default function Button(props: PropsType) {
  return (
    <div className={`${styles.button} ${props.active && styles.active}`} onClick={props.handleClick}>
      {props.active ? props.iconActive : props.iconInactive}
      <div className={`paragraph ${props.active && styles.active}`}>{props.label}</div>
    </div>
  );
}
