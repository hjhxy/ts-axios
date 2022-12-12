import { AxiosRequestConfig } from "../types";
import { isObject } from "./type"

export const processHeaders = (config: AxiosRequestConfig): any => {
    const { headers, data } = config;
    if (isObject(data)&&headers) {
        Object.keys(headers).forEach(key => {
            if (key.toLowerCase() === "content-type") return;
        });
        headers['Content-Type'] = 'application/json; charset=utf-8';
    }
}