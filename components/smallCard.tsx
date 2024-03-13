import styles from "@/components/smallCard.module.scss";
import variables from "@/app/variables.module.scss";

import { useAppSelector } from "@/store/store";

import BusinessIcon from "@mui/icons-material/Business";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RedeemIcon from "@mui/icons-material/Redeem";
import DiamondIcon from "@mui/icons-material/Diamond";

interface PropsType {
  name: string;
  position: string;
  address: string;
  amount: number;
  indexNumber: number;
  handleClick: () => void;
}

export default function SmallCard(props: PropsType) {
  const { dataSetState } = useAppSelector((state) => state.controllerReducer);

  return (
    <div className={styles.smallCard}>
      <div className={styles.indexNumber}>{props.indexNumber}</div>
      <div className={styles.cardContainer} onClick={() => props.handleClick()}>
        <div className={styles.leftContainer}>
          <AccountCircleIcon style={{ color: variables.greyColor }} />
          <div className={styles.detailContainer}>
            <div className={styles.detailTop}>
              {props.name},{" "}
              <span className={styles.position}>{props.position}</span>
            </div>
            <div className={styles.detailBottom}>
              <BusinessIcon style={{ height: 10 }} />
              {props.address}
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          {dataSetState === "Like" && (
            <div className={styles.itemContainer}>
              <ThumbUpAltIcon
                style={{ color: variables.primaryColor, height: 18 }}
              />
              {props.amount}&nbsp;
              {dataSetState}
            </div>
          )}
          {dataSetState === "Comment" && (
            <div className={styles.itemContainer}>
              <ChatBubbleIcon
                style={{ color: variables.primaryColor, height: 18 }}
              />
              {props.amount}&nbsp;
              {dataSetState}
            </div>
          )}
          {dataSetState === "Point" && (
            <div className={styles.itemContainer}>
              <RedeemIcon
                style={{ color: variables.primaryColor, height: 18 }}
              />
              {props.amount}&nbsp;
              {dataSetState}
            </div>
          )}
          {dataSetState === "Diamond" && (
            <div className={styles.itemContainer}>
              <DiamondIcon
                style={{ color: variables.primaryColor, height: 18 }}
              />
              {props.amount}&nbsp;
              {dataSetState}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
