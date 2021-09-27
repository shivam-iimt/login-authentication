import {SIGNIN_USER, SET_CURRENT_USER, SIGNOUT_USER, SIGNIN_USER_REQUEST,SIGNIN_USER_ERROR} from './userType';
import setAuthorizationToken from './setAuthorization';
import jwt from 'jsonwebtoken';
const axios = require('axios');
export const signin_user=(email, password)=>{
    return function(dispatch){
        dispatch({
            type:SIGNIN_USER_REQUEST,
            payload:true,
        })
    var OPTIONS={
        url:`${process.env.REACT_APP_API_BASE_URL}user/signin/`,
        method:"POST",
        data:{
            email:email,
            password:password,
        },
        headers: {
            "content-type": "application/json",
        },
    }

    axios(OPTIONS).then(res=>{
        const msg=res.data.msg;
        if(msg === "Valid Information"){  
            const etoken=res.data.authtoken;
            localStorage.setItem("etoken", etoken);
            setAuthorizationToken(etoken);
                dispatch(setCurrentUser(jwt.decode(etoken)));
                dispatch({
                    type:SIGNIN_USER,
                    payload:msg,
                    isSigninIn:true,
                })
        }else{
                dispatch({
                    type:SIGNIN_USER,
                    payload:msg,
                    isSigninIn:false,
                })
        }
    })
    .catch(error=>{
        dispatch({
            type:SIGNIN_USER_ERROR,
            loading:false,
            payload:error.message,
        });
    });

   }

}

export const signOut=()=>{
    return function(dispatch){
        dispatch({
            type:SIGNIN_USER_REQUEST,
            payload :true,
        })
        
        localStorage.removeItem('etoken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
        dispatch({
            type:SIGNOUT_USER,
            payload :true,
        })
        
        dispatch({
            type:SIGNIN_USER_ERROR,
            loading:false,
            payload:'',
        })

        window.location.href="/";
    }
}
export const setCurrentUser=(result)=>{
    // console.log(result);
    return{
        type:SET_CURRENT_USER,
        payload:result,
    }

}