import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MessageAlert from '../basic_components/MessageAlert';
import {connect} from 'react-redux';

export class LoginForm extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		console.log(this.props.isLogin);
		this.state = {
			'user_name': '',
			'password': '',
			'loading': false,
			'message': '',
			'isLogin': false
		}
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitForm(event) {
		event.preventDefault();
		this.setState({
			'loading': true
		})
		let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
		// if(password_regex.test(this.state.password))
		// {
			let formData = new FormData;
			formData.append('email', this.state.user_name);
			formData.append('password', this.state.password);
			axios.post('http://127.0.0.1:8000/login', formData).then(response => {
				console.log(response);
				if(response.data == 1)
				{
					this.setState({
						'message': "Đăng nhập thành công.",
						'isLogin': true
					})
				}
				else
				{
					this.setState({
						'message': "Email hoặc password không đúng.",
						'isLogin': false
					})
				}
				this.setState({
					'loading': false
				})
				this.props.FormSubmit(this.state.isLogin);
				console.log(this.props);
			}).catch(error => console.log(error))
		// }
		// else
		// {
		// 	// alert("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number.");
		// 	this.setState({
		// 		'error': 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number in password field.'
		// 	})
		// }
		
	}

	render() {
		return (
			// <div className="container">
			// 	<form onSubmit={(event) => this.onSubmitForm(event)}>
			// 		<input type="text" name="user_name" id="user_name" onChange={(event) => this.onChangeInput(event)} value={this.state.user_name} />
			// 		<input type="password" name="password" id="password" onChange={(event) => this.onChangeInput(event)} value={this.state.password} />
			// 		<button className="btn btn-primary">Login</button>
			// 	</form>
			// </div>
			<div className="bs-example">
				<form onSubmit={(event) => this.onSubmitForm(event)}>
					<MessageAlert message={this.state.message} loading={this.state.loading}/>
					<div className="form-group">
						<label htmlFor="inputEmail">Email</label>
						<input type="email" className="form-control is-valid" name="user_name" id="user_name" onChange={(event) => this.onChangeInput(event)} value={this.state.user_name} placeholder="Email" required=""/>
        			</div>
					<div className="form-group">
						<label htmlFor="inputPassword">Password</label>
						<input type="password" className="form-control is-invalid" name="password" id="password" onChange={(event) => this.onChangeInput(event)} value={this.state.password} placeholder="Password" required=""/>
        			</div>
					<div className="form-group">
						<label className="form-check-label"><input type="checkbox"/>Remember me</label>
        			</div>
					<button type="submit" className="btn btn-primary">Sign in</button>
    			</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		FormSubmit: (isLogin) => {
			dispatch(
				{
					type: 'Submit_Login_Form',
					isLogin
				}
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.isLogin
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(LoginForm);