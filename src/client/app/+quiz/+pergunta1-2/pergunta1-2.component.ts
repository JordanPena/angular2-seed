import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'pergunta12-component',
  templateUrl: 'pergunta1-2.component.html'

})

export class Pergunta12Component{
  //trazer de um service
  title: string = 'O que comove você?';
  urlImg1 = 'https://http.cat/401.jpg';
  urlImg2 = 'https://http.cat/506.jpg';
  resp1: number;



  clickLink(value: number){
    this.resp1 = value;
    console.log(this.resp1);
    console.log('resp2 ok');
  }

}