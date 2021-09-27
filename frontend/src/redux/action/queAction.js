import {QUE_REQUEST,QUE_ERROR,QUE_SUCCESS,QUE_RESET,QUE_FIND_ERROR,QUE_FIND_REQUEST,QUE_FIND_SUCCESS} from './queType';
const axios = require('axios'); 

export const addQuelist=(cateId,que,op1,op2,op3,op4,cor)=>{
    return function(dispatch){
        dispatch({
        type:QUE_REQUEST,
            payload:true,
        })
        var OPTIONS={
            url:`${process.env.REACT_APP_API_BASE_URL}bank/questionadd`,
            method:"POST",
            data:{
                cateId:cateId,
                que:que,
                op1:op1,
                op2:op2,
                op3:op3,
                op4:op4,
                cor:cor,
            },
            headers: {
                "content-type": "application/json",
            },
        }
        axios(OPTIONS)
        .then(res=>{
            dispatch({
                type:QUE_SUCCESS,
                payload:res.data.result,
                msg:res.data.msg
            })
        })
        .catch(error=>{
            dispatch({
                type:QUE_ERROR,
                payload:error
            })
        });
    }
}


export const findQuelist=()=>{
    return function(dispatch){
        dispatch({
        type:QUE_FIND_REQUEST,
            payload:true,
        })
        var OPTIONS={
            url:`${process.env.REACT_APP_API_BASE_URL}bank/questionfind`,
            method:"GET",
            headers: {
                "content-type": "application/json",
            },
        }
        axios(OPTIONS)
        .then(res=>{
            console.log(res);
            dispatch({
                type:QUE_FIND_SUCCESS,
                payload:res.data.result,
            })
        })
        .catch(error=>{
            dispatch({
                type:QUE_FIND_ERROR,
                payload:error
            })
        });
    }
}

export const resetquesNotification=()=>{
    return function(dispatch){
        dispatch({
        type:QUE_RESET,
            payload:false,
            msg:"",
        })
    }
}