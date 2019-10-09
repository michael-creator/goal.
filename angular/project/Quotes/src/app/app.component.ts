import { Component } from '@angular/core';
import {  Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] =[
    {id:1, name:'Smile because it confuses people. Smile because its easier than explaining what is killing you inside.'},
    {id:2, name:'Introduce a little anarchy. Upset the established order, and everything becomes chaos. Im an agent of chaos...'},
    {id:3, name:'Do I really look like a guy with a plan? You know what I am? Im a dog chasing cars. I wouldnt know what to do with one if I caught it! You know, I just... *do* things.' },
    {id:4, name:'Why so serious? >:)'},
    {id:5, name:'They Laugh At me Because Im Different. I laugh At Then Because There all the same'},
  ];

  constructor(){
    
  }
}
