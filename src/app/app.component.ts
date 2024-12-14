import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-testion-services';

  ngOnInit() {
    const calculator = new Calculator();
    console.log(calculator.multiply(2,3));
    console.log(calculator.divide(2,0));
  }
}
