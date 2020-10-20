import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: String;

  element = document.querySelector("#table")
  scrollToElement():void{
    console.log(this.element);
    if(this.element){
    this.element.scrollIntoView({behavior: "smooth", block: "start"});
  }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
