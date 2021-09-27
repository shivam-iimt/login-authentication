import {CATE_REQUEST,CATE_ERROR,CATE_SUCCESS,CATE_RESET,CATE_FIND_ERROR,CATE_FIND_REQUEST,CATE_FIND_SUCCESS} from './cateType';
const axios = require('axios'); 

export const addCatelist=(cate, status)=>{
    return function(dispatch){
        dispatch({
        type:CATE_REQUEST,
            payload:true,
        })
        var OPTIONS={
            url:`${process.env.REACT_APP_API_BASE_URL}bank/cate`,
            method:"POST",
            data:{
                cate:cate,
                status:status,
            },
            headers: {
                "content-type": "application/json",
            },
        }
        axios(OPTIONS)
        .then(res=>{
            dispatch({
                type:CATE_SUCCESS,
                payload:res.data.result,
                msg:res.data.msg
            })
        })
        .catch(error=>{
            dispatch({
                type:CATE_ERROR,
                payload:error
            })
        });
    }
}


export const findCatelist=()=>{
    return function(dispatch){
        dispatch({
        type:CATE_FIND_REQUEST,
            payload:true,
        })
        var OPTIONS={
            url:`${process.env.REACT_APP_API_BASE_URL}bank/find`,
            method:"GET",
            headers: {
                "content-type": "application/json",
            },
        }
        axios(OPTIONS)
        .then(res=>{
            console.log(res);
            dispatch({
                type:CATE_FIND_SUCCESS,
                payload:res.data.result,
            })
        })
        .catch(error=>{
            dispatch({
                type:CATE_FIND_ERROR,
                payload:error
            })
        });
    }
}

export const resetNotification=()=>{
    return function(dispatch){
        dispatch({
        type:CATE_RESET,
            payload:false,
            msg:"",
        })
    }
}