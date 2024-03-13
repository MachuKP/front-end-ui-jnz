import { useState } from "react";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { setModeState, setScaleState } from "@/store/slice/controllerSlice";

import styles from "@/components/controllBar.module.scss";
import variables from "@/app/variables.module.scss";
import {
  styleGrey,
  styleDark,
  stylePrimary,
} from "@/constant/constant";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ControllBar() {
  const headerTab = [{ label: "Submission" }, { label: "Engagement" }];
  const scaleDate = [
    { label: "Daily" },
    { label: "Weekly" },
    { label: "Monthly" },
  ];
  const dateList = [
    { day: "M", date: "17" },
    { day: "T", date: "18", active: true },
    { day: "W", date: "19", today: true },
    { day: "TH", date: "20", disable: true },
    { day: "F", date: "21", disable: true },
    { day: "S", date: "22", disable: true },
    { day: "SU", date: "23", disable: true },
  ];
  const [headerTabState, setHeaderTabState] = useState("Engagement");

  const {scaleState, modeState} = useAppSelector((state) => state.controllerReducer)
  const dispatch = useDispatch()

  const onChangeMode = (mode: string) => {
    dispatch(setModeState(mode))
  }

  const onChangeScale = (scale: string) => {
    dispatch(setScaleState(scale))
  }

  return (
    <div className={styles.controllBar}>
      <div className={styles.headerTabContainer}>
        <div className={styles.headerTab}>
          {headerTab.map((item, index) => (
            <div
              key={index}
              className={`sub-title ${styles.tabItem} ${
                headerTabState === item.label && styles.active
              }`}
              onClick={() => setHeaderTabState(item.label)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controllerContainer}>
        <div className={styles.scaleDate}>
          {scaleDate.map((item, index) => (
            <div
              key={index}
              className={`${styles.scaleItem} ${
                scaleState === item.label && styles.active
              }`}
              onClick={() => onChangeScale(item.label)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className={styles.interfaceControll}>
          <div className={styles.iconContainer} onClick={() => onChangeMode("data")}>
            {modeState === "data" ? (
              <EqualizerIcon style={stylePrimary} />
            ) : (
              <EqualizerIcon style={styleGrey} />
            )}
          </div>
          <div className={styles.iconContainer} onClick={() => onChangeMode("list")}>
            {modeState === "list" ? (
              <FormatListBulletedIcon style={stylePrimary} />
            ) : (
              <FormatListBulletedIcon style={styleGrey} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.dateControll}>
        <div className={styles.dateTabContainer}>
          <div className={styles.iconContainer}>
            <KeyboardArrowLeftIcon style={styleGrey} />
          </div>
          {scaleState === "Daily" ? (
            dateList.map((item, index) => (
              <div key={index}>
                <div className={styles.dayItem}>{item.day}</div>
                <div
                  className={`${styles.dayItem} ${item.today && styles.today} ${
                    item.active && styles.active
                  } ${item.disable && styles.disable}`}
                >
                  {item.date}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className={styles.weekyMask} />
              {dateList.map((item, index) => (
                <div key={index}>
                  <div className={styles.dayItem}>{item.day}</div>
                  <div
                    className={`${styles.dayItem} ${
                      item.disable && styles.disable
                    }`}
                  >
                    {item.date}
                  </div>
                </div>
              ))}
            </>
          )}
          <div className={styles.iconContainer}>
            <KeyboardArrowRightIcon style={styleGrey} />
          </div>
        </div>
        <div className={styles.todayButton}>
          <ArrowDownwardIcon
            style={{ color: variables.primaryColor, fontSize: "10px" }}
          />
          Today
        </div>
      </div>
      <div className={styles.bottomLine} />
      <div className={styles.downButton}>
        <KeyboardArrowDownIcon style={styleDark} />
      </div>
    </div>
  );
}
