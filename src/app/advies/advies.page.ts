import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advies',
  templateUrl: './advies.page.html',
  styleUrls: ['./advies.page.scss'],
})
export class AdviesPage implements OnInit {
     constructor() {}
  adviesEen =  false;
  adviesTwee = false;
  adviesDrie = false;
  adviesVier = false;
  adviesVijf = false;


  ngOnInit() {
  }

   setAdvice(value) {
      if (value < 200 )
      {
        this.adviesEen = true;
      }

      if (value >= 200 && value < 280)
      {
        this.adviesTwee = true;
      }
      if (value >= 280 && value < 350)
      {
        this.adviesDrie = true;
      }
      if (value >= 350 && value < 450)
      {
        this.adviesVier = true;
      }
      if (value > 450 )
      {
        this.adviesVijf = true ;
      }
    }

}
