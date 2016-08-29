import { Component, OnInit } from '@angular/core';
import { FormBuilder, FORM_PROVIDERS, Validators, FORM_DIRECTIVES, ControlGroup} from '@angular/common';

import { loginService } from './login.service';



@Component({
	moduleId: module.id,
	selector: 'login-component',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	directives: [FORM_DIRECTIVES],
	providers: [FORM_PROVIDERS, loginService]


})

export class LoginComponent implements OnInit{

	loginForm: ControlGroup;

	constructor (private fb : FormBuilder, private loginService: loginService ){

	}

	onSubmit(value: any){
		console.log(value);
		this.loginService.postLogin(value)
		.subscribe(data =>{ },
		error => alert(error),
		() => {}
		);

	}

	ngOnInit(): any{
		this.loginForm = this.fb.group({
			'email': ["", Validators.required],
			'login': ["", Validators.required],
			'password': ["", Validators.required]
		});
  }

}