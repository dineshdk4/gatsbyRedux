import axios from "axios";
let apiRequestID = 1
const networkRequest = async ({ url, method = "GET", data = {}, header = {}, apiID = apiRequestID++ }) => {
    
    const headerParam = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Language": "en",
        ...header
    }

    if (localStorage.getItem("token")) {
        headerParam.Authorization = `Bearer ${localStorage.getItem("merchantToken")}`
    }
    return new Promise(async (resolve, reject) => {
        try {
            const request = {
                method: method.toUpperCase(),
                url,
                headers: headerParam,
            }
            if (method.toUpperCase() !== "GET") {
                request.data = data;
            }
            const response = await axios(request);
            if (response) {
                switch (response.status) {
                    case 200:
                        case 422:
                            resolve(response.data)
                            break;
                            
                            default:
                                reject(response)
                                break;
                            }
                        } else {
                            reject(response)
                        }
        } catch (error) {
            console.warn(`APIRequestID : ${apiID} CONNECTION FAILED`)
            console.warn(`error : ${error}`)
            reject(error)
        }
    });
}
axios.interceptors.response.use(
    response => {
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    },
    async (error) => {
        const { response } = error;
        return new Promise(async (resolve, reject) => {
            switch (response.status) {
                case 422:
                    resolve({ success: false, ...response })
                    break;
                case 401:
                case 403:
                    await logout();
                    break;
                default:
                    reject(response)
                    break;
            }
        });

        
    })

    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.clear();
        window.location.reload();
    }


export { networkRequest };
