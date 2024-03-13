import styles from "@/components/commentBar.module.scss";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function CommentBar() {
  return (
    <div className={styles.commentBar}>
      <div className={styles.iconContainer}>
        <AddPhotoAlternateIcon />
        <AttachFileIcon />
        <AlternateEmailIcon />
      </div>
      <div className={styles.commentContainer}>comment</div>
    </div>
  );
}
