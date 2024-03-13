import styles from "@/components/post.module.scss";

import variables from "@/app/variables.module.scss";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface PropsType {
  name: string;
  position: string;
  detail: string;
}

export default function Post(props: PropsType) {
  return (
    <div className={styles.post}>
      <div className={styles.profile}>
        <div className={styles.accountIcon}>
          <AccountCircleIcon
            style={{ scale: 2, color: variables.lightColor }}
          />
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.position}>{props.position}</div>
        </div>
      </div>
      <div className={styles.detailContainer}>{props.detail}</div>
      <div className={styles.footer}>
        <div className={styles.leftContainer}>
          2 days ago <span className={styles.like}>3 People likes</span>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.reply}>
            <ChatBubbleOutlineIcon />
            <div>Reply</div>
          </div>
          <div className={styles.reply}>
            <ThumbUpOffAltIcon /> 
            <div>Like</div>
          </div>
        </div>
      </div>
    </div>
  );
}
