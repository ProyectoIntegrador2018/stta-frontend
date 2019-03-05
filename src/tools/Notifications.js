import {notification} from "antd/lib/index";
import { message } from 'antd';

export default class Notifications {
    static openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    static loading = () =>{
        message.loading('Action in progress..', 2.5)
            .then(() => message.success('Loading finished', 2.5))
            .then(() => message.info('Loading finished is finished', 2.5));
    }
}
