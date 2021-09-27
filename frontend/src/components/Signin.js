import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signin_user} from '../redux';

class Signin extends Component {

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            passwordShow:false,
        }
    }

    changeInput=(e)=>{
        const key = e.target.name;
        const val = e.target.value;
            this.setState({[key]:val})
    }

    togglePasswordShow=()=>{
        this.setState({ passwordShow: !this.state.passwordShow });
    }

    formSubmit=(e)=>{
        e.preventDefault();
        this.props.signin_user(this.state.email,this.state.password)
    }

    render() {
        if(this.props.msg!==''){
            var msg = <div className="alert alert-danger alert-dismissible fade show mt-5" role="alert">{this.props.msg}
              </div>
        }

        if(this.props.loading===true){
            var action = 
            <button className="btn btn-lg btn-block btn-primary mt-5" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    
            </button>
        }else{
            action = <button className="btn btn-lg btn-block btn-primary mt-5"  type="submit">Sign in</button>
        }

        return (
            <div className="layout">
            <div className="container d-flex flex-column ">
                <div className="row align-items-center justify-content-center no-gutters min-vh-100">
                    <div className="col-12 col-md-5 col-lg-4 card p-5">
                    <form onSubmit={(e)=>this.formSubmit(e)}>
                        <h1 className="font-bold text-center">Education</h1>
                        <p className="text-center mb-6">Welcome to the official LMS</p>
                            <div className="form-group">
                                <label className="sr-only">Email Address</label>
                                <input type="email" name="email" className="form-control form-control-lg" value={this.state.email}  onChange={this.changeInput} placeholder="Enter your email" required/>
                            </div>
                            <div className="form-group form-group-i">
                                <label className="sr-only">Password</label>
                                <input type={(this.state.passwordShow)? "text":"password"} name="password" className="form-control form-control-lg icon-input" value={this.state.password}  onChange={this.changeInput} placeholder="Enter your password" />
                                <i className={this.state.passwordShow?"fas fa-eye-slash icon":"fas fa-eye icon"}  onClick={this.togglePasswordShow}></i>
                            </div>

                            {msg}
                            
                            {action}

                        <p className="text-right text-mute mt-2">version 0.1.5</p>
                    </form>
                    </div>
                </div>
            </div>
        </div> 
        )
    }
}

  

const mapStatetoProps=(state)=>{
    return{
        email:state.email,
        password:state.password,
        msg:state.signin.msg,
        loading:state.signin.loading,
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        signin_user:function(email,password){
            dispatch(signin_user(email,password));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Signin);