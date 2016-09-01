import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'pergunta1-component',
  templateUrl: 'pergunta-1.component.html'

})

export class Pergunta1Component{
  //trazer de um service
  title: string = 'O que comove você?';
  urlImg1 = 'https://http.cat/405.jpg';
  urlImg2 = 'https://http.cat/100.jpg';
  resp1: number;



  clickLink(value: number){
    this.resp1 = value;
    console.log(this.resp1);
  }

}