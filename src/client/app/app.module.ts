import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';

import { AboutModule } from './+about/about.module';
import { HomeModule } from './+home/home.module';
import { SharedModule } from './shared/shared.module';

import { QuizComponent } from './+quiz/index';
import { LoginComponent} from './+login/index';
import { Pergunta1Component } from './+pergunta1/index';
import { Pergunta12Component } from './+pergunta1-2/index';


@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, ReactiveFormsModule, SharedModule.forRoot()],
  declarations: [AppComponent, QuizComponent, LoginComponent, Pergunta1Component, Pergunta12Component],
  providers: [
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
