import { loginAPI } from "../api/api"

const POST_USERINFO = "POST_USERINFO" 
const SUCCESS_POST_USERINFO = "SUCCES_POST_USERINFO"

const inititalState ={
    phone:"",
    country_code:'',
    isCodeCame : false
}




const postUserInfo = (phone,code)=>({type:POST_USERINFO,phone:phone, code:code })
const succesPostUserInfo = ()=>({type: SUCCESS_POST_USERINFO})
const loginReducer = (state = inititalState, action)=>{
    switch(action.type){
        case POST_USERINFO :
            return{
                ...state,
                phone: action.phone,
                country_code: action.code}
        case SUCCESS_POST_USERINFO: 
                return{
                    ...state,
                    isCodeCame: true
                }

        default:
            return state
    }
}





export function postNumberThunk(phone,code) {

    return async dispatch => {
        try {
            const response = await loginAPI.login(phone,code)
            
            if (response.status ==1){
            dispatch(postUserInfo(phone,code))
            dispatch(succesPostUserInfo())
            }
        }
        catch(e) {
            console.log("error with post");
        }
    }
}

export function postCodeThunk(phone,code,sms) {

    return async dispatch => {
        try {
            const response = await loginAPI.authentifacation(phone,code,sms)
            
            if (response.status ==1){
            
            }
        }
        catch(e) {
            console.log("error with post");
        }
    }
}



export default loginReducer

