import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,              // ✅ Add this line
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

   

  counter:number = 0;

 handleIncrement() {
  this.counter = this.counter  + 1
 }
 

 handleDecrement() {
  this.counter = this.counter  - 1

 }

 handleReset() {
  this.counter = 0
 }
 

}
