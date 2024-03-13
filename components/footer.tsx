"use client";
import { useState } from "react";

import styles from "@/components/footer.module.scss";
import { stylePrimary, styleGrey } from "@/constant/constant";

import EditNoteIcon from "@mui/icons-material/EditNote";
import SettingsIcon from "@mui/icons-material/Settings";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function Footer() {
  const [active, setActive] = useState("Statistic");
  const footerMenu = [
    {
      title: "Write",
      icon: <EditNoteIcon style={styleGrey} />,
      active: <EditNoteIcon style={stylePrimary} />,
    },
    {
      title: "Approval",
      icon: <CheckCircleIcon style={styleGrey} />,
      active: <CheckCircleIcon style={stylePrimary} />,
    },
    {
      title: "Export",
      icon: <SendIcon style={styleGrey} />,
      active: <SendIcon style={stylePrimary} />,
    },
    {
      title: "Statistic",
      icon: <AccessTimeFilledIcon style={styleGrey} />,
      active: <AccessTimeFilledIcon style={stylePrimary} />,
    },
    {
      title: "Setting",
      icon: <SettingsIcon style={styleGrey} />,
      active: <SettingsIcon style={stylePrimary} />,
    },
  ];
  return (
    <div className={styles.footer}>
      {footerMenu.map((item) => (
        <div
          key={item.title}
          className={`${styles.menu} ${active === item.title && styles.active}`}
          onClick={() => setActive(item.title)}
        >
          <div className={styles.iconContainer}>
            {active === item.title ? item.active : item.icon}
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
