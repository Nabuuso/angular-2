import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentService } from '../app/services/student.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    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
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  cars = [
    {name: "toyota", colour: "white"},
    {name: "benz", colour: "blue"},
    {name: "suzuki", colour: "silver"}
  ]
}
