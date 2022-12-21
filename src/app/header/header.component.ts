import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    // localStorage.setItem("users", JSON.stringify({}))
    this.router.navigate(['/login'])
  }

}
