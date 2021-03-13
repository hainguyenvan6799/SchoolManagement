import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class MessageAlert extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.message != '' && !this.props.loading)
        {
            return (
                <div className="alert alert-danger">
                    <h2>{this.props.message}</h2>
                </div>
            )
        }
        else if(this.props.message != '' && this.props.loading){
            return (
                <div className="alert alert-success">
                    <h2>Đang kiểm tra, vui lòng đợi.</h2>
                </div>
            )
        }
        else
        {
            return (
                <div className="alert alert-success">
                    <p>Vui lòng nhập thông tin để đăng nhập</p>
                </div>
            )
        }
        
    }
}