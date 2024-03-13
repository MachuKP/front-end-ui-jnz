"use client";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

import { styleSecondary } from "@/constant/constant";
import variables from "@/app/variables.module.scss";

import Header from "@/components/header";
import AttachFile from "@/components/attachFile";
import Post from "@/components/post";
import CommentBar from "@/components/commentBar";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import RedeemIcon from "@mui/icons-material/Redeem";

export default function Home() {
  const router = useRouter();

  const contentList = [
    {
      title: "Content 1",
      detail:
        "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam harum ipsam praesentium officia enim perferendis, sunt possimus animi maxime labore.",
    },
    {
      title: "Content 2",
      detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Content 3",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, asperiores nam cumque reprehenderit explicabo et aspernatur, obcaecati quis natus totam eos laudantium molestiae nulla. Quisquam quibusdam maxime voluptatem nostrum corporis.",
    },
  ];
  const summaryList = [
    { label: "Read", amount: 12 },
    { label: "Unread", amount: 25 },
    { label: "Likes", amount: 2 },
  ];
  const postList = [
    {
      name: "name1 surname1",
      position: "Design",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate?",
    },
    {
      name: "name2 surname2",
      position: "Design",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate?",
    },
  ];
  return (
    <div className={styles.main}>
      <Header
        title="OKRs Report"
        leftElement={
          <div className={styles.back} onClick={router.back}>
            <ArrowBackIosIcon
              style={{ color: variables.secondaryColor, height: 12 }}
            />
            Back
          </div>
        }
        rightElement={<MoreHorizIcon style={styleSecondary} />}
      />
      <div className={styles.page}>
        <div className={styles.reportHeader}>
          <div className={styles.leftContainer}>
            <div className={styles.accountIcon}>
              <AccountCircleIcon
                style={{ scale: 2, color: variables.lightColor }}
              />
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.name}>Ekarach Sripen</div>
              <div className={styles.position}>Design Director</div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.timeContainer}>
              <CalendarMonthIcon
                style={{ color: variables.greyColor, height: 16 }}
              />
              <div className={styles.timeText}>14/01/2020</div>
            </div>
            <div className={styles.timeContainer}>
              <AccessTimeIcon
                style={{ color: variables.greyColor, height: 16 }}
              />
              <div className={styles.timeText}>12: 45</div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {contentList.map((item, index) => (
            <div key={index} className={styles.contentItem}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.detail}>{item.detail}</div>
            </div>
          ))}
        </div>
        <AttachFile />
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryLeft}>
          {summaryList.map((item, index) => (
            <div key={index} className={styles.summaryItem}>
              {item.label} ({item.amount})
            </div>
          ))}
        </div>
        <div className={styles.summaryRight}>
          View <ArrowForwardIosIcon />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <RedeemIcon />
          <div>Give Point</div>
        </div>
        <div className={styles.button}>
          <ThumbUpOffAltIcon />
          <div>Like</div>
        </div>
      </div>
      {postList.map((item, index) => (
        <Post
          key={index}
          detail={item.detail}
          name={item.name}
          position={item.position}
        />
      ))}
      <CommentBar />
    </div>
  );
}
