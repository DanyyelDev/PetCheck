import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: SidenavComponent,
    children: [
      { path: '', component: MainComponent },

      //Example
      //{ path: 'registro-actividad', component: RegistroActividadComponent },

    ]
  }
];
