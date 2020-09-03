import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../home/alerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor( private alertsService: AlertsService) { }

  ngOnInit(): void {
  }

 //getalerts(){
  // console.log("The btn has been clicked");
 //}

}
