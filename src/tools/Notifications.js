import {notification} from "antd/lib/index";


export default class Notifications {
    static openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message: message,
            description: description,
        });
    };
}
