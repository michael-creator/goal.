import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] =[
    {id:1, name:'Smile because it confuses people. Smile because its easier than explaining what is killing you inside.',description: 'The Joker - Heath Ledger'},
    {id:2, name:'Introduce a little anarchy. Upset the established order, and everything becomes chaos. Im an agent of chaos...',description: 'The Joker - Heath Ledger'},
    {id:3, name:'Do I really look like a guy with a plan? You know what I am? Im a dog chasing cars. I wouldnt know what to do with one if I caught it! You know, I just... *do* things.' ,description: 'The Joker - Heath Ledger'},
    {id:4, name:'Why so serious? >:)',description: 'The Joker - Heath Ledger'},
    {id:5, name:'They Laugh At me Because Im Different. I laugh At Then Because There all the same',description: 'The Joker - Heath Ledger'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
