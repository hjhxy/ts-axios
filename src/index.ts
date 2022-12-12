import request from './xhr';
import { AxiosRequestConfig, AxiosResponse } from './types/index'; 
import { RequestMethod} from './types/index';
import { buildURL } from './helpers/url';
import { transformRequestDate } from './helpers/data';
import { processHeaders } from './helpers/headers';


function axios(config: AxiosRequestConfig) {
    processConfig(config);//对参数config加工
    request(config);//主要请求模块
}

function processConfig(config: AxiosRequestConfig) {
    transformURL(config);
    transformHeader(config);
    transformDate(config);
}


function transformURL(config:AxiosRequestConfig) {
    const { url, params } = config;
    config.url=buildURL(url,params);
}

function transformHeader(config: AxiosRequestConfig) {
    processHeaders(config);
}

function transformDate(config: AxiosRequestConfig) {
    const { data } = config;
    config.data = transformRequestDate(data);
}



/* -------------test------------------- */
const btn = document.querySelector("button");
btn?.addEventListener("click", () => {
    axios({
    method: RequestMethod.POST,
        url: "http://localhost:3000/users",
        params: {
        params1:'11'
    },
    data: {
        name: "zs",
        age:18
    },
    }).then((res:AxiosResponse) => {
        console.log(res);
    });
});
export default axios;