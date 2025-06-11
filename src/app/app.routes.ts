import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { AboutComponent } from './components/about/about.component';
import { InicialesComponent } from './components/fases/iniciales/iniciales.component';
import { AppointmentRequestComponent } from './components/functions/appointment-request/appointment-request.component';
import { MedicalRecordComponent } from './components/functions/medical-record/medical-record.component';
import { AppointmentsListComponent } from './components/functions/appointments-list/appointments-list.component';
import { AlterRolesComponent } from './components/functions/alter-roles/alter-roles.component';
import { SegundaComponent } from './components/fases/segunda/segunda.component';
import { PostmortenComponent } from './components/fases/postmorten/postmorten.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: SidenavComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'Inicial', component: InicialesComponent },
      { path: 'segunda-fase', component: SegundaComponent },
      { path: 'postmortem', component: PostmortenComponent },


      { path: 'solicitar-cita', component: AppointmentRequestComponent },
      { path: 'mis-citas', component: AppointmentsListComponent },
      { path: 'historial-medico', component: MedicalRecordComponent },
      { path: 'cambiar-rol', component: AlterRolesComponent },   
      
      

      //Example
      //{ path: 'registro-actividad', component: RegistroActividadComponent },
      
    ]
  }
];
