import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

Yourname="";

students=[
          {
            name:"lovemore",
            Age: 27,
            Profession: "Web Developer"
          },

          {
            name:"Esther Kalinda",
            Age: 20,
            Profession: "Hair dresser"
          },
          
          {
            name:"Henry",
            Age: 1,
            Profession: "Student"
          },
          
          {
            name:"Peter",
            Age: 43,
            Profession: "Pentrol attendant"
          } 
]



  constructor() { }

  ngOnInit(): void {
  }


  lovefunction(){
    alert('yes I do');
  }


}
