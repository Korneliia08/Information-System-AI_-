import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },{
  path:'chatBot',
    component:ChatPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
