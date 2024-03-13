"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";

import styles from "@/app/page.module.scss";

import { stylePrimary, styleSecondary } from "@/constant/constant";
import { data } from "@/constant/data";

import ControllBar from "@/components/controllBar";
import Header from "@/components/header";
import Card from "@/components/card";
import Graph from "@/components/graph";
import SubHeader from "@/components/subHeader";

import HouseIcon from "@mui/icons-material/House";
import TuneIcon from "@mui/icons-material/Tune";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import DiamondIcon from "@mui/icons-material/Diamond";
import SmallCard from "@/components/smallCard";

export default function Home() {
  const { modeState, scaleState } = useAppSelector(
    (state) => state.controllerReducer
  );
  const router = useRouter();

  const handleClick = () => {
    router.push("/okrreport");
  };

  const cardList = [
    {
      label: "Like",
      icon: <ThumbUpOffAltIcon style={stylePrimary} />,
    },
    {
      label: "Comment",
      icon: <ChatBubbleOutlineIcon style={stylePrimary} />,
    },
    {
      label: "Point",
      icon: <RedeemIcon style={stylePrimary} />,
    },
    {
      label: "Diamond",
      icon: <DiamondIcon style={stylePrimary} />,
    },
  ];

  const listData = [
    {
      name: "Name1 SurName1",
      position: "Design",
      address: "address1",
      amount: 30,
    },
    {
      name: "Name2 SurName2",
      position: "Creative",
      address: "address2",
      amount: 20,
    },
    {
      name: "Name3 SurName3",
      position: "HR",
      address: "address3",
      amount: 15,
    },
    {
      name: "Name4 SurName4",
      position: "Tester",
      address: "address4",
      amount: 40,
    },
    {
      name: "Name5 SurName5",
      position: "Developer",
      address: "address1",
      amount: 33,
    },
    {
      name: "Name6 SurName6",
      position: "Design2",
      address: "address1",
      amount: 22,
    },
    {
      name: "Name7 SurName7",
      position: "Design3",
      address: "address7",
      amount: 11,
    },
  ];

  return (
    <div className={styles.page}>
      <Header
        title="All Report"
        showDropdown={true}
        leftElement={<HouseIcon style={styleSecondary} />}
        rightElement={<TuneIcon style={styleSecondary} />}
      />
      <ControllBar />
      <div className={styles.content}>
        <SubHeader />
        {modeState === "data" ? (
          scaleState === "Daily" ? (
            <div className={styles.cardContainer}>
              {cardList.map((item, index) => (
                <Card
                  key={index}
                  amount={data.today[item.label as keyof object]}
                  element={item.icon}
                  label={item.label}
                />
              ))}
            </div>
          ) : (
            <>
              <div className={styles.graphContainer}>
                <Graph />
              </div>
            </>
          )
        ) : (
          listData.map((item, index) => (
            <SmallCard
              key={index}
              indexNumber={index + 1}
              name={item.name}
              amount={item.amount}
              address={item.address}
              position={item.position}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
    </div>
  );
}
