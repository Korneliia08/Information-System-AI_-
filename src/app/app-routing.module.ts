import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {UserCabinetPageComponent} from './pages/user-cabinet-page/user-cabinet-page.component';
import {UserCabinetDashboardPageComponent} from './pages/user-cabinet-page/panels/user-cabinet-dashboard-page/user-cabinet-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }, {
    path: 'chatBot',
    component: ChatPageComponent
  }, {
    path: 'userCabinet',
    component: UserCabinetPageComponent,
    children: [
      {
        path: '',
        component: UserCabinetDashboardPageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
