"use strict";

/**
 * 根据属性名或属性对象，获取一个对象的值
 * @param {*} item
 * @param {*} keyItem 可以为string或一个object对象，object的结构为 { key: String, transform: Function }
 */
function getItemValByKeyItem (item, keyItem) {
    if (!Array.isArray(keyItem) && typeof keyItem == 'object') {
        let { key, transform } = keyItem;
        return (transform instanceof Function) && transform(item[key]);
    } else if (typeof keyItem == 'string') {
        return item[keyItem];
    } else {
        throw new Error('filterKeys item type error');
    }
}

class Filter {

    static getInstance () {
        if (!Filter.instance) {
            Filter.instance = new Filter();
        }
        return Filter.instance;
    }

    simpleFiltrate (data = [], filterVal, filterKeys = [])  {
        if (!filterVal || !filterKeys.length) {
            return data;
        }
        return data.filter(this.getMultipleKeysOneValFilterCB(filterVal, filterKeys));
    };
    /**
     * 获得一个适用于Array.filter的方法, 如果filterVal的值为空，或filterKeys的长度为0 则返回一个 item => item 函数
     *
     * @param {*} filterVal 过滤的值
     * @param {*} filterKeys 需要过滤的属性名，item可以为string或一个object对象，
     * object的结构为 { key: String, transform: Function }, transform为一个回调函数，用于转换原有值为过滤时采用的值, transform(val): val
     * @param {*} ignoreCase 是否大小写忽略
     */
    getMultipleKeysOneValFilterCB (filterVal, filterKeys = [], ignoreCase = true) {
        return (!filterVal || !filterKeys.length) ?
            item => item :
            item => {
                for (let keyItem of filterKeys) {
                    let val = getItemValByKeyItem(item, keyItem);
                    if (val) {
                        if (typeof val === 'number' && val == filterVal) {
                            return item;
                        } else if (typeof val === 'string' && new RegExp(filterVal, `${ignoreCase? 'i': ''}`).test(val)) {
                            return item;
                        } else if ( Array.isArray(val) ) {
                            for (let val_item of val ) {
                                if (new RegExp(filterVal, `${ignoreCase? 'i': ''}`).test(val_item)) {
                                    return item;
                                }
                            }
                        }
                    }
                }
            }
    }

    getOneKeyMultipleValsFilterCB (filterVals = [], filterKey) {
        return (!filterVals.length) ?
                item => item :
                item => {
                    let {[filterKey]: val} = item;
                    if (val == undefined) {
                        throw new Error('item do not has this property');
                    }
                    if (filterVals.includes(val)) {
                        return item;
                    }
                }
    }

}
export default Filter.getInstance();
