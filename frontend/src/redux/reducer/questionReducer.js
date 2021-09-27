import {QUE_REQUEST,QUE_ERROR,QUE_SUCCESS,QUE_RESET,QUE_FIND_ERROR,QUE_FIND_REQUEST,QUE_FIND_SUCCESS} from "../action/queType";

const intialState={
    loading:false,
    action:'Question',
    queResult:{},
    msg:'',
    data:[]
}

const cateReducer=(state=intialState, action)=>{

    switch (action.type) {
        case QUE_REQUEST:return{
            ...state,
            loading:action.payload,
        }
        case QUE_SUCCESS:return{
            ...state,
            msg:action.msg,
            loading:action.loading,
            cateResult:action.payload
        }
        case QUE_ERROR:return{
            ...state,
            loading:action.loading,
            msg:action.msg,
        }
        case QUE_RESET:return{
            ...state,
            loading:action.loading,
            msg:action.msg,
        }

        case QUE_FIND_REQUEST:return{
            ...state,
            loading1:action.payload,
        }
        case QUE_FIND_SUCCESS:return{
            ...state,
            loading1:action.loading,
            data:action.payload
        }
        case QUE_FIND_ERROR:return{
            ...state,
            data:action.payload,
            loading1:action.loading,
        }
        default:return state;
    }

}

export default cateReducer;