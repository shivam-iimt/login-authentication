import {SIGNIN_USER, SET_CURRENT_USER, SIGNOUT_USER, SIGNIN_USER_REQUEST, SIGNIN_USER_ERROR} from "../action/userType";

const intialState={
    isSigninIn:false,
    loading:false,
    email:'',
    password:'',
    action:'Signin',
    userResult:{},
    msg:'',
}

const signinReducer=(state=intialState, action)=>{

    switch (action.type) {
        case SIGNIN_USER_REQUEST:return{
            ...state,
            loading:action.payload,
        }
        case SIGNIN_USER:return{
            ...state,
            msg:action.payload,
            isSigninIn:action.isSigninIn,
            loading:action.loading
        }
        case SET_CURRENT_USER:return{
            ...state,
            userResult:action.payload,
            isSigninIn:true,
        }
        case SIGNOUT_USER:return{
            ...state,
            isSigninIn:false,
            loading:action.payload,
        }
        case SIGNIN_USER_ERROR:return{
            ...state,
            isSigninIn:false,
            msg:action.payload,
            loading:action.loading
        }
        default:return state;
    }

}

export default signinReducer;