// 工具函数
// 对params加工处理，拼接到url后面
/* 
1. 对象参数
2. 数组参数
3. null/undefined
*/
export function buildURL(url: string, params?: any):string {
    if (!params) {
        return url;
    }
    
    const paramsStr: Array<String> = [];
    Object.keys(params).forEach(key => {
        const value =params[key];
        if (value !== undefined && value !== null) {
            paramsStr.push(`${key}=${value}`);
        }
    })
    return url+"?"+paramsStr.join('&');;
}