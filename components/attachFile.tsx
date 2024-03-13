import styles from "@/components/attachFile.module.scss";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function AttachFile() {
  return (
    <div className={styles.attachFile}>
      <div className={styles.header}>Image</div>
      <div className={styles.imageContainer}>
        <div className={styles.iconContainer}>
          <AddPhotoAlternateIcon style={{scale: 3}} />
        </div>
        <div className={styles.iconContainer}>
          <AddPhotoAlternateIcon style={{scale: 3}} />
        </div>
        <div className={styles.iconContainer}>
          <AddPhotoAlternateIcon style={{scale: 3}} />
        </div>
      </div>
      <div className={styles.header}>Attach File</div>
      <div className={styles.uploadContainer}>
        <AttachFileIcon /> Update Design OKRs.pdf
      </div>
    </div>
  );
}
