import { Component } from '@angular/core';

interface CarouselItem{
  id:number;
  title:{
    first:string,
    second:string
  };
  subtitle:string;
  link:string;
  image:string;
  order:number;
  marginLeft:number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  height:number = 400;
  isFullScreen:boolean=false;
  items:CarouselItem[]=[
    {id: 1, title:{first:"TITULO1",second:"TITULO12"},subtitle:"Subtitulo1", link:"/", image:"assets/img/1.jpg", order:0, marginLeft:0},
    {id: 2, title:{first:"TITULO2",second:"TITULO22"},subtitle:"Subtitulo2", link:"/", image:"assets/img/2.jpg", order:1, marginLeft:0},
    {id: 3, title:{first:"TITULO3",second:"TITULO23"},subtitle:"Subtitulo3", link:"/", image:"assets/img/3.jpg", order:2, marginLeft:0},
    {id: 4, title:{first:"TITULO4",second:"TITULO24"},subtitle:"Subtitulo4", link:"/", image:"assets/img/4.jpg", order:3, marginLeft:0}
  ];

  finalHeight:string | number = 0;
  currentPosition:number=0;

  constructor(){
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`
  }

  ngOnInit(){
    this.items.map((i, index)=>{
      i.id = index;
      i.marginLeft = 0;
    });
  }

  setCurrentPosition(position:number){
    this.currentPosition = position;
    const item = this.items.find(i => i.id === 0);
    if (item) {
      item.marginLeft = -100 * position;
    }
  }
  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition;
    }else{
      nextPosition = 0;
    }
    const item = this.items.find(i => i.id === 0);
    if (item) {
      item.marginLeft = finalPercentage;
    }
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition>=0){
      finalPercentage = -100 * backPosition;
    }else{
      backPosition = this.items.length -1;
      finalPercentage = -100 * backPosition;
    }
    const item = this.items.find(i => i.id === 0);
    if (item) {
      item.marginLeft = finalPercentage;
    }
    this.currentPosition = backPosition;
  }
}
