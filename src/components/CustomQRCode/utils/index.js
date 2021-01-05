import React from "react";
import {
  LinkOutlined,
  FileTextOutlined,
  IdcardOutlined,
  MailOutlined,
  MessageOutlined,
  WifiOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  TwitterOutlined,
  FacebookFilled,
  CalendarOutlined,
  FilePdfOutlined,
  CustomerServiceOutlined,
  AppleOutlined,
  PictureOutlined
} from "@ant-design/icons";
// Import Components
import URLContent from "../components/URLContent";

export const OptionsCustom = [
  {
    key: "url",
    title: "url",
    icon: <LinkOutlined />,
    content: <URLContent />,
  },
  {
    key: "text",
    title: "text",
    icon: <FileTextOutlined />,
  },
  {
    key: "vcard",
    title: "vcard",
    icon: <IdcardOutlined />,
  },
  {
    key: "email",
    title: "email",
    icon: <MailOutlined />,
  },
  {
    key: "sms",
    title: "sms",
    icon: <MessageOutlined />,
  },
  {
    key: "wifi",
    title: "wifi",
    icon: <WifiOutlined />,
  },
  {
    key: "bitcoin",
    title: "bitcoin",
    icon: <DollarOutlined />,
  },
  {
    key: "location",
    title: "location",
    icon: <EnvironmentOutlined />,
  },
  {
    key: "twitter",
    title: "twitter",
    icon: <TwitterOutlined />,
  },
  {
    key: "facebook",
    title: "facebook",
    icon: <FacebookFilled />,
  },
  {
    key: "event",
    title: "event",
    icon: <CalendarOutlined />,
  },
  {
    key: "pdf",
    title: "pdf",
    icon: <FilePdfOutlined />,
  },
  {
    key: "mp3",
    title: "mp3",
    icon: <CustomerServiceOutlined />,
  },
  {
    key: "appstore",
    title: "appstore",
    icon: <AppleOutlined />,
  },
  {
    key: "image",
    title: "image",
    icon: <PictureOutlined />,
  },
];
