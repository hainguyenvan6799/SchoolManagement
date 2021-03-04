import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ErrorsAlert extends Component
{
	constructor(props){
		super(props);
	}

	render(){
		if(typeof this.props.errors == "string"){
			return (
			<div className="alert alert-danger">
					<h2>{this.props.errors}</h2>
			</div>
		)
	}
		return (
		this.props.errors.map((item, index) => {
			return (
				<div key={index}>
					<h2>Bạn có lỗi ở dòng {item.row}</h2>
				</div>
			) 
		})
		)
	}
}
