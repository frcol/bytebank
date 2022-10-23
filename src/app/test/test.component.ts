import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{
  @Output() evTestar = new EventEmitter<any>();

  pageName: string = "Olha só!";

  myMethod() {
    console.log(this.pageName);

    const myObject = {nome:"Fabio", idade:49};
    this.evTestar.emit(myObject);
  }
}
