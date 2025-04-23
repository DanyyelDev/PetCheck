import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { AboutComponent } from './components/about/about.component';
import { InicialesComponent } from './components/fases/iniciales/iniciales.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: SidenavComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'Inicial', component: InicialesComponent }

      //Example
      //{ path: 'registro-actividad', component: RegistroActividadComponent },

    ]
  }
];
