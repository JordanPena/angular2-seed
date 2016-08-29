import { Component } from '@angular/core';

import { LoginComponent } from '../+login/index';
import { QuizService } from './quiz.service';
import { Pergunta1Component } from '../+pergunta1/index';

@Component({
	moduleId: module.id,
	selector: 'quiz-component',
	templateUrl: 'quiz.component.html',
	directives: [ LoginComponent, Pergunta1Component],
	providers: [ QuizService ]

})

export class QuizComponent {
  constructor(quizService: QuizService){

  }

  onAlerta(){
      console.log('chamou');

    }
}