import {CATE_REQUEST,CATE_ERROR,CATE_SUCCESS,CATE_RESET,CATE_FIND_ERROR,CATE_FIND_REQUEST,CATE_FIND_SUCCESS} from "../action/cateType";

const intialState={
    loading:false,
    action:'Category',
    cateResult:{},
    msg:'',
    data:[]
}

const queReducer=(state=intialState, action)=>{

    switch (action.type) {
        case CATE_REQUEST:return{
            ...state,
            loading:action.payload,
        }
        case CATE_SUCCESS:return{
            ...state,
            msg:action.msg,
            loading:action.loading,
            cateResult:action.payload
        }
        case CATE_ERROR:return{
            ...state,
            loading:action.loading,
            msg:action.msg,
        }
        case CATE_RESET:return{
            ...state,
            loading:action.loading,
            msg:action.msg,
        }

        case CATE_FIND_REQUEST:return{
            ...state,
            loading1:action.payload,
        }
        case CATE_FIND_SUCCESS:return{
            ...state,
            loading1:action.loading,
            data:action.payload
        }
        case CATE_FIND_ERROR:return{
            ...state,
            data:action.payload,
            loading1:action.loading,
        }
        default:return state;
    }

}

export default queReducer;