import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] =[
    new Quote(1, 'Smile because it confuses people. Smile because its easier than explaining what is killing you inside.','The Joker - Heath Ledger',new Date(2019,6,9)),
    new Quote(2, 'Introduce a little anarchy. Upset the established order, and everything becomes chaos. Im an agent of chaos...','The Joker - Heath Ledger',new Date(2019,6,9)),
    new Quote(3, 'Do I really look like a guy with a plan? You know what I am? Im a dog chasing cars. I wouldnt know what to do with one if I caught it! You know, I just... *do* things.','The Joker - Heath Ledger',new Date(2019,6,9)),
    new Quote(4,'Why so serious? >:)','The Joker - Heath Ledger',new Date(2019,6,9)),
    new Quote(5,'They Laugh At me Because Im Different. I laugh At Then Because There all the same','The Joker - Heath Ledger',new Date(2019,6,9)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
