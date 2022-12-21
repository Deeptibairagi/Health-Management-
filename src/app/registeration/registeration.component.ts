import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private router: Router) { }

  f_name = new FormControl('', [Validators.required]);
  l_name = new FormControl('',Validators.required,);
  email = new FormControl('',[Validators.required,Validators.email]);
  pswd = new FormControl('',Validators.required,);
  conf_pswd = new FormControl('',Validators.required,);


  ngOnInit(): void {
  }

  register(){
    if (this.f_name.value == "" || this.l_name.value == "" || this.email.value=="" || this.pswd.value == "" || this.pswd.value == ""){
      // show warning popup "Please fill the field"
      window.alert("Please fill the field")
    }
    else{
      let
      correct_email= this.email.valid
      // console.log("email:", this.email.valid)
      if(correct_email==false){
        window.alert("Wrong Email")
      }
      if (this.pswd.value==this.conf_pswd.value){
      // show sucess popup "Message has been sent"
        // window.alert("Message has been sent")

        window.localStorage.setItem("users",JSON.stringify({'fname': this.f_name.value, 'lname': this.l_name.value, 'email': this.email.value, 'pswd': this.conf_pswd.value}))
        this.router.navigate(['/home'])

      // blank all field
      this.f_name.setValue("")
      this.l_name.setValue("")
      this.email.setValue("")
      this.pswd.setValue("")
      this.conf_pswd.setValue("")
      }
      else{
        window.alert("Password does not match")
      }
    }
  }
}
