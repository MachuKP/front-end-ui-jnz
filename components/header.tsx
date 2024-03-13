import styles from "@/components/header.module.scss";
import variables from "@/app/variables.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface PropType {
  title: string;
  showDropdown?: boolean;
  leftElement?: JSX.Element;
  leftFunction?: () => void;
  rightElement?: JSX.Element;
  rightFunction?: () => void;
}

export default function Header(props: PropType) {
  const iconStyle = { color: variables.secondaryColor };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {props.leftElement}
        <div className={styles.textContainer}>
          <h1 className={`title ${styles.title}`}>{props.title}</h1>
          {props.showDropdown && 
            <div className={styles.iconContainer}>
                <KeyboardArrowDownIcon style={iconStyle} />
            </div>
          }
        </div>
        {props.rightElement}
      </div>
    </div>
  );
}
