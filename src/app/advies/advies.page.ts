import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advies',
  templateUrl: './advies.page.html',
  styleUrls: ['./advies.page.scss'],
})
export class AdviesPage implements OnInit {
     constructor() {
   let value: number = 240;
   let adviesEen: boolean =  false;
   let adviesTwee: boolean = false;
   let adviesDrie: boolean = false;
   let adviesVier: boolean = false;
   let AdviesVijf: boolean = false;

   if(value<200)
     {
         adviesEen = true;
     }

   if (value>=200 && value<280)
     {
         adviesTwee = true;
     }
     if (value>=280 && value<350)
     {
         adviesDrie = true;
     }
     if (value>=350 && value <450)
     {
         adviesVier = true;
     }
     if(value>450)
     {
        adviesVijf = true ;
     }

   }


  ngOnInit() {
  }

}
