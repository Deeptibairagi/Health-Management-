import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormControl('');
  pswd = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin(){
    if (this.login.value == "" || this.pswd.value == ""){
      // show warning popup "Please fill the field"
      window.alert("Please fill the field")
    }else{
      // show sucess popup "Message has been sent"
      // window.alert("Message has been sent")
      let user = JSON.parse(localStorage.getItem("users")!) 
      if (user==null){
        window.alert('Incorrect email or password')
      }
      if (user.email == this.login.value && user.pswd == this.pswd.value){
        this.router.navigate(['/home']);
      }else{
        window.alert("Incorrect email or password.")
      }
      // blank all field
      // this.login.setValue("")
      // this.pswd.setValue("")
    
    }

    console.log(this.login.value,this.pswd.value)
  }

}
