/* 
类型判断模块
*/

const toStringCall = function (data:any) {
    return Object.prototype.toString.call(data);
}

export function isDate(data: any) {
    return  toStringCall(data)== '[object Date]';
}

export function isArray(data: any) {
    return toStringCall(data)== '[object Array]';
}

export function isObject(data: any) {
    return toStringCall(data) == '[object Object]';
}

