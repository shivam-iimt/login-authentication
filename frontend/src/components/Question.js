import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuelist,resetquesNotification,findCatelist,findQuelist } from "../redux";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Question() {
    const [cateId, setCateId] = useState("");
    const [que, setQue] = useState("");
    const [op1, setOp1] = useState("");
    const [op2, setOp2] = useState("");
    const [op3, setOp3] = useState("");
    const [op4, setOp4] = useState("");
    const [cor, setCor] = useState("");


    const data = useSelector(state => state.cate);
    const question = useSelector(state => state.questionReducer);
    const dispatch = useDispatch();

    function saveEmp(e) {
        e.preventDefault();
        dispatch(addQuelist(cateId,que,op1,op2,op3,op4,cor));
    }

    useEffect(() => {
        dispatch(findCatelist())
        dispatch(findQuelist())
        if(question.msg==="SUCCESS"){
            dispatch(resetquesNotification());
            var msg ="Category Information Insert Successfully...";
            var color = "success";
            updatenotificationAlert(msg,color);
            resetFrom();
        }
        if(question.msg==="FAIL"){
            dispatch(resetquesNotification());
            var msg ="Category Information Does Not Insert...";
            var color = "danger";
            updatenotificationAlert(msg,color);
            resetFrom();
        }
    },[question.msg]);

    function resetFrom() {
        setCateId("");
        setQue("");
        setOp1("");
        setOp2("");
        setOp3("");
        setOp4("");
        setCor("");
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
    {data.data.map((val,index)=>{
        
        if(val.status===1){
            return(
                <option key={index} value={val._id}>{val.cate}</option>)
        }
         
    })}
    </>


    var keyData =  <>
    {question.data.map((val, index)=>{

        return(
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td className="text-capitalize">{val.que}</td>
                <td className="text-capitalize">{val.op1}</td>
                <td className="text-capitalize">{val.op2}</td>
                <td className="text-capitalize">{val.op3}</td>
                <td className="text-capitalize">{val.op4}</td>
                <td className="text-capitalize text-success">{val.cor}</td>
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
                        <h1 className="font-bold text-center">Question Add</h1>
                        <p className="text-center mb-6">Welcome to the official LMS</p>
                        <div className="form-group">
                            <label className="small">Status Category *</label>
                            <select className="form-control form-control-md" value={cateId} name="status" onChange={(e)=>{setCateId(e.target.value);}} required>
                                <option value="">Select Category Status</option>
                                {listData}
                            </select>                                                     
                        </div>
                            <div className="row">
                            <div className="form-group col-md-12">
                                <input type="text" name="que" className="form-control form-control-lg" value={que}  onChange={(e)=>setQue(e.target.value)} placeholder="Enter your Question" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="que" className="form-control form-control-lg" value={op1}  onChange={(e)=>setOp1(e.target.value)} placeholder="Enter your Option 01" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="que" className="form-control form-control-lg" value={op2}  onChange={(e)=>setOp2(e.target.value)} placeholder="Enter your Option 02" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="que" className="form-control form-control-lg" value={op3}  onChange={(e)=>setOp3(e.target.value)} placeholder="Enter your Option 03" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="que" className="form-control form-control-lg" value={op4}  onChange={(e)=>setOp4(e.target.value)} placeholder="Enter your Option 04" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="que" className="form-control form-control-lg" value={cor}  onChange={(e)=>setCor(e.target.value)} placeholder="Enter your Correct Answer" required/>
                            </div>
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
                        <th scope="col">Question</th>
                        <th scope="col">option 01</th>
                        <th scope="col">option 02</th>
                        <th scope="col">option 03</th>
                        <th scope="col">option 04</th>
                        <th scope="col">Correct Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {keyData}
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div> 
        </>
    )
}

export default Question;