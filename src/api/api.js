import * as axios from 'axios';




const instanceAxios = axios.create({

    baseURL: '/',
    responseType: "json",
    withCredentials: true,

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
    }

});



export const loginAPI = {

    async login(phone, country_code) {

        try {
            const response = await instanceAxios.post('/user/sendSms', {
                "phone": phone,
                "country_code": country_code,
                "firebase_token": "test"
            })

            return response.data
        }
        catch (e) {
            console.log(`😱 Axios request failed:`);
        }
    },

    async authentifacation(phone, country_code, sms) {

        try {
            const response = await instanceAxios.post('/user/checkSmsCode', {
                "phone": phone,
                "country_code": country_code,
                "firebase_token": "test",
                "sms_code": sms
            })

            return response.data
        }
        catch (e) {
            console.log(`😱 Axios request failed:`);
        }
    },



}





