const POST_USERINFO = "POST_USERINFO" 

const inititalState ={
    isCodeCame : false 
}




export const postUserInfo = ()=>({type:POST_USERINFO })

const loginReducer = (state = inititalState, action)=>{
    switch(action.type){
        case POST_USERINFO :
            return{...state, isCodeCame: true}

        default:
            return state
    }
}

export default loginReducer

