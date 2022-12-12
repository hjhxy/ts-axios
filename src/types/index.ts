// 作为公共的类型定义文件

export enum RequestMethod{
    GET = "get",
    POST = "post",
    DELETE = "delete",
    OPTIONS = "options",
    PUT="put",
}

export interface AxiosRequestConfig{
    url: string,
    method?: RequestMethod,
    data?: any,
    params?: any,
    headers?: AxiosHeaders,
    responseType?:XMLHttpRequestResponseType
}

export interface AxiosHeaders{
    [props:string]:string,
}

export interface AxiosResponse{
    data: any,
    status: number,
    statusText: string,
    headers: AxiosHeaders,
    config:AxiosRequestConfig,
    request:any
}