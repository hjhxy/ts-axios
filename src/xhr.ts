// 请求模块

import { AxiosRequestConfig } from "./types";

export default function request(config: AxiosRequestConfig):Promise {
    return new Promise((resolve, reject) => {
        const { data=null, url, method = "GET",headers } = config;
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        for (const key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                // 请求成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                }
                // 请求失败
                else {
                    reject(xhr);
                }
            }
        }
    })
}