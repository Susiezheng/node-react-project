
/**
 * @privileges {[权限管理]}
 */
"use strict";
//获取权限信息
let privileges = localStorage.getItem('privileges');
if(privileges && privileges != 'undefined'){
  privileges = JSON.parse(privileges);
}
class Authority {
   //根据返回的所有的权限判断，参数targetPrivileges可以为数组也可以为字符串，表示的是该功能需要的权限或权限集合
   getAuthority(targetPrivileges){
   	let allPrivilege = [];
   	if (privileges && Array.isArray(privileges)) {
   		allPrivilege = privileges;
   	}
    if (Array.isArray(targetPrivileges)) {
      for (let item of targetPrivileges) {
        if (allPrivilege.includes(item.valueOf())) {
          return true;
        }
      }
      return false;
    } else{
      return allPrivilege.includes(targetPrivileges.valueOf());
    }
   }
}

export default new Authority();
