"use strict";
import { message, notification } from 'antd';
//成功提示
message.config({
  top: 100,
  duration: 2,
});
//错误提示
notification.config({
  top: 44,
  duration: 30,
});

class Message {
  success(content) {
    //成功信息
    return message.success(content);
  }

  info(content) {
    //一般的提示
    return message.info(content);
  }

  error(content) {
    //错误信息
    return notification.error({ message: 'error', description: content });
  }

  warning(content) {
    //警告信息
    return notification.warning({ message: 'warning', description: content });
  }
}

export default new Message();
