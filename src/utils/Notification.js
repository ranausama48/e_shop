import { notification } from "antd";
export const openNotificationWithIcon = (type, msg) => {
  const className =
    type === "error" ? "error" : type === "success" ? "success" : "primary";
  notification[type]({
    message: "Notification Title",
    className: className,
    description: msg,
  });
};
