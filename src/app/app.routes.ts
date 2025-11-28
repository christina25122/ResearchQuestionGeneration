import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResearchBotComponent } from '../research.bot/research.bot.component'
// import { index.html } from './home/home.component';
// import { page.html} from './dashboard/dashboard.component';

export const routes: Routes = [
  {path : '', component: AppComponent},
  {path: 'bot', component: ResearchBotComponent }

];


