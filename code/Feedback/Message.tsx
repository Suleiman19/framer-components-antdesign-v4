import { message } from "antd"


export function showMessage(type, msg) {
    switch (type) {
        case 'success':
            message.success(msg);
            break
        case 'error':
            message.error(msg);
            break
        case 'warning':
            message.warning(msg);
            break
        default:
            message.info(msg);
            break

    }
}
