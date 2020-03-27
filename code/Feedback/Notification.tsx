import { notification, message, Button } from "antd"

const style = {
  // width: 600,
  // marginLeft: 335 - 600,
  // marginLeft: "-50%",
  background: "#F6FFED",
}

const COLOR_SUCCESS = "#F6FFED"


/**
 * Notification with a custom click-out Button
 * 
 * @param message notif title
 * @param description  body
 * @param type 'success' | 'info' | 'warning' | 'error'
 * @param onClick  click listener for notification container
 * @param btn  supply a custom <Button /> with it's own onClick
 */
export function showNotificationwBtn(message, description, type, onClick, btn) {
  type == null ? 'info' : type
  notification[type]({
    message,
    description,
    onClick,
    btn,
    style: {
      background: type == 'success' ? COLOR_SUCCESS : "#FFF",
      // marginRight: 1140/2,
    },
  });
}

/**
 * Simple Notification
 * @param message notif title
 * @param description body
 * @param type 'success' | 'info' | 'warning' | 'error'
 * @param onClick click listener for notification container
 */
export function showNotification(message, description, type, onClick) {
  notification[type]({
    message,
    description,
    onClick,
    style: {
      background: type == 'success' ? COLOR_SUCCESS : "#FFF",
      // left: 1140/2,
    },
  })
}