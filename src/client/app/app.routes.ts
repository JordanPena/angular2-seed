import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { QuizRoutes } from './+quiz/index';
import { LoginRoutes } from './+login/index';
import { Pergunta1Routes } from './+pergunta1/index';
import { Pergunta12Routes } from './+pergunta1-2/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...QuizRoutes,
  ...Pergunta1Routes,
  ...Pergunta12Routes,
  ...LoginRoutes
];
