import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  contact_submit(){
    if (this.name.value=="" || this.email.value=="" || this.message.value==""){
      window.alert("Please fill the field")
    }
    else{
      let 
      check_email = this.email.valid
      if (check_email==false){
        window.alert("Wrong email")
      }
      else{
        window.alert("Message has been sent")

        window.localStorage.setItem("contact",JSON.stringify({'name': this.name.value, 'email': this.email.value, 'msg': this.message.value}))
        
        // this.name.setValue("")
        // this.email.setValue("")
        // this.message.setValue("")
      }
    }   
  }
} 