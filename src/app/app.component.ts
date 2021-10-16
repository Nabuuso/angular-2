import { Component } from '@angular/core';
import { constructor } from 'console';
import { cars } from './carlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

})

export class AppComponent {
  title = 'car-app';
}

let carLength = cars.length;
cars.id = carLength+1;
cars.completeDate = new Date(cars.completeDate)
this.cars.push(cars)
}
toggleDetails(index);{
this.cars[index].showDescription = this.cars[index].showDescription
}  completecar(isComplete, index);{
if (isComplete(); {
  this.goals.splice(index,1);
}
}
deleteCar(isComplete, index);{

if (isComplete()) {
  let toDelete = confirm(`Are you sure you want to delete ${this.cars[index].name}?`)     
   if (toDelete){
    this.goals.splice(index,1)
  }
}
}
function toggleDetails(index: any) {
  throw new Error('Function not implemented.');
}

function index(index: any) {
  throw new Error('Function not implemented.');
}

function completeGoal(isComplete: any, index: (index: any) => void) {
  throw new Error('Function not implemented.');
}

function isComplete(isComplete: any, index: (index: any) => void) {
  throw new Error('Function not implemented.');
}

function completecar(isComplete: (isComplete: any, index: (index: any) => void) => void, index: (index: any) => void) {
  throw new Error('Function not implemented.');
}

function deleteCar(isComplete: (isComplete: any, index: (index: any) => void) => void, index: (index: any) => void) {
  throw new Error('Function not implemented.');
}
constructor(); { }  ngOnInit(); void {
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

