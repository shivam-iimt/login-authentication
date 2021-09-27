import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCatelist,resetNotification,findCatelist } from "../redux";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Category() {
    const [cate, setCate] = useState("");
    const [status, setStatus] = useState("");
    const data = useSelector(state => state.cate);
console.log(data);
    const dispatch = useDispatch();

    function saveEmp(e) {
        e.preventDefault();
        dispatch(addCatelist(cate,status));
       
    }

    useEffect(() => {
        dispatch(findCatelist())
        if(data.msg==="SUCCESS"){
            dispatch(resetNotification());
            var msg ="Category Information Insert Successfully...";
            var color = "success";
            updatenotificationAlert(msg,color);
            resetFrom();
        }
        if(data.msg==="FAIL"){
            dispatch(resetNotification());
            var msg ="Category Information Does Not Insert...";
            var color = "danger";
            updatenotificationAlert(msg,color);
            resetFrom();
        }
    },[data.msg]);

    function resetFrom() {
        setCate("");
        setStatus("");
    }

    function updatenotificationAlert(msg,color){
        store.addNotification({
            message: msg,
            type: color,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
              showIcon:true,
            },
            width:250
          });
    }

    var listData =  <>
    {data.data.map((val, index)=>{
        if(val.status===1){
            var st = "Active";
        }else{
            st = "Active";
        }
         return(
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td className="text-capitalize">{val.cate}</td>
                <td>{st}</td>
                <td>{val.createDate}</td>
            </tr>)
    })}
    </>

    return (
        <>
        <ReactNotification/>
           <div className="layout">
            <div className="container d-flex flex-column ">
                <div className="row align-items-center justify-content-center no-gutters min-vh-100">
                    <div className="col-md-12">
                    <form onSubmit={(e)=>saveEmp(e)}>
                        <h1 className="font-bold text-center">Categoyr</h1>
                        <p className="text-center mb-6">Welcome to the official LMS</p>
                            <div className="form-group">
                                <label className="sr-only">Category</label>
                                <input type="text" name="cate" className="form-control form-control-lg" value={cate}  onChange={(e)=>setCate(e.target.value)} placeholder="Enter your Category" required/>
                            </div>
                            <div className="form-group">
                            <label className="small">Status Category *</label>
                            <select className="form-control form-control-md" value={status} name="status" onChange={(e)=>{setStatus(e.target.value);}} required>
                                <option value="">Select Category Status</option>
                                <option value="1"> Active</option>
                                <option value="0">Deactive</option>
                            </select>                                                     
                        </div>
                            <button className="btn btn-lg btn-block btn-primary mt-5"  type="submit">Submit</button>

                        <p className="text-right text-mute mt-2">version 0.1.5</p>
                    </form>
                    </div>
                <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Status</th>
                        <th scope="col">Create Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listData}
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div> 
        </>
    )
}

export default Category;