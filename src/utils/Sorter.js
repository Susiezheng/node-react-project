"use strict";
/**
 * 临时适用于表格的公用的 sorter方法
 */
class Sorter {

    static getInstance () {
        if (!Sorter.instance) {
            Sorter.instance = new Sorter();
        }
        return Sorter.instance;
    }
    /**
     * 获取字典排序回掉函数，可优化点
     */
    getLocalCompareCB (key) {
        return ({[key]: a}, {[key]: b}) => a.localeCompare(b);
    }

    getNumCompareCB (key) {
        return ({[key]: a}, {[key]: b}) => parseInt(a) - parseInt(b);
    }

    getBoolCompareCB (key) {
      return ({[key]: a}, {[key]: b}) => {
          const fa = a ? 1 : 0;
          const fb = b ? 1 : 0;
          return (fa-fb);
      };
    }

}
export default Sorter.getInstance();
