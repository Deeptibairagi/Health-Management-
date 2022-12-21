import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  male = new FormControl('');
  female = new FormControl('');
  age = new FormControl('');
  height = new FormControl(null);
  weight = new FormControl(null);

  bmi = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

  cal_submit(){
    if (this.weight.value &&  this.height.value){
    let bmi= Math.round(this.weight.value / ((this.height.value/100)*2))
    console.log(bmi)
    this.bmi = bmi
      
    this.age.setValue("")
    this.male.setValue("")
    this.female.setValue("")
    this.height.setValue(null)
    this.weight.setValue(null)
  }



  }

}
