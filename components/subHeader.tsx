import { useAppSelector } from "@/store/store";
import styles from "@/components/subHeader.module.scss";

import variables from "@/app/variables.module.scss";

import IosShareIcon from "@mui/icons-material/IosShare";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import DiamondIcon from "@mui/icons-material/Diamond";
import Button from "./button";
import { setDataSetState } from "@/store/slice/controllerSlice";
import { useDispatch } from "react-redux";

export default function SubHeader() {
  const dispatch = useDispatch();
  const { scaleState, dataSetState } = useAppSelector(
    (state) => state.controllerReducer
  );

  const subHeaderButton = [
    {
      label: "Like",
      iconActive: <ThumbUpOffAltIcon style={{color: variables.secondaryColor, height: 18}} />,
      iconInactive: <ThumbUpOffAltIcon style={{color: variables.primaryColor, height: 18}}  />,
    },
    {
      label: "Comment",
      iconActive: <ChatBubbleOutlineIcon style={{color: variables.secondaryColor, height: 18}}  />,
      iconInactive: <ChatBubbleOutlineIcon style={{color: variables.primaryColor, height: 18}} />,
    },
    {
      label: "Point",
      iconActive: <RedeemIcon style={{color: variables.secondaryColor, height: 18}}  />,
      iconInactive: <RedeemIcon style={{color: variables.primaryColor, height: 18}} />,
    },
    {
      label: "Diamond",
      iconActive: <DiamondIcon style={{color: variables.secondaryColor, height: 18}}  />,
      iconInactive: <DiamondIcon style={{color: variables.primaryColor, height: 18}} />,
    },
  ];

  return (
    <div className={styles.subHeader}>
      <div className={styles.topContainer}>
        {scaleState === "Daily" ? "18 December" : "17-23 December 2019"}
        <IosShareIcon style={{color: variables.primaryColor}} />
      </div>
      <div className={styles.buttonContainer}>
        {scaleState === "Weekly" &&
          subHeaderButton.map((item, index) => (
            <Button
              handleClick={() => dispatch(setDataSetState(item.label))}
              key={index}
              active={dataSetState === item.label}
              iconActive={item.iconActive}
              iconInactive={item.iconInactive}
              label={item.label}
            />
          ))}
      </div>
    </div>
  );
}
