import { isObject } from "./type";

export function transformRequestDate(data: object) {
    if (isObject(data)) {
        return JSON.stringify(data);
    }
}