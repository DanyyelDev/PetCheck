import { Component } from '@angular/core';
import { ListFilesDriveComponent } from '../../shared/list-files-drive/list-files-drive.component';
import { CommonModule } from '@angular/common';
import { DocDrive } from '../../../../types';

@Component({
  selector: 'app-segunda',
  imports: [ CommonModule, ListFilesDriveComponent ],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.css'
})
export class SegundaComponent {
  title = "Diseño"
  driveFiles: DocDrive[] = [
    { id: '1iW_QT8seukHIMfq3p20UgonFp9R_jqp6', name: '1. Plantilla Documento de decisiones' },
    { id: '1oyRsKQWY_cJhCrvdHMQYsRb3heyoa97-', name: '2. Vista de Contexto' },
    { id: '1hP8W2q6PUtDXIO7uIcK-7fGuhn_VHPey', name: '3. Vista de Despliegue' },
    { id: '11aKhwi9hE4YEEdIj1mePnnEH_4RZB9eQ', name: '4. Vista de Información' },
    { id: '1M6oOppQHSBL2Gd4Dk3_h8DrS1bZH_6W6', name: '5. Vista Funcional' },
  ];

  title2 = "Estrategia"
  driveFiles2: DocDrive[] = [
    { id: '1sVBSFfTA0nzRBkWHourDOz8ccXZ3JPOw', name: '1. Control de cambios' },
    { id: '1MxDLA-t-m5eC-387MX4Ew8Z1UeFMg2Ll', name: '2. Documento de Estrategia' },
    { id: '1eVnNFWwupL35CvaQQrlstmxKV7QL0Wse', name: '3. Estimacion de esfuerzo PetCheck' },
    { id: '19-OMsxqicA_2V13chTEhsT4DyU9tgVug', name: '4. Informe complementario Estimacion de esfuerzo' },
    { id: '15o4jWk2MLJbO4FP_cjV8PkO3mB-Bxtj8', name: '5. PLAN DE ADMINISTRACIÓN DE CONFIGURACIÓN' },
    { id: '1E9SOcyEE2_Ra9CEmvhKHP-ZsnyeIOj0m', name: '6. Plan de riesgos' },
    { id: '1bqcREWhM4kcZOZL0WXrQWBA1OT-NlUx0', name: '7. Script Estrategia' },
  ];

  title3 = "Lanzamiento"
  driveFiles3: DocDrive[] = [
    { id: '15nkctn1ky_GTJccXtt4Q5v-n8hrEAG2X', name: '1. Especificación de objetivos y métricas para el rol de equipo ' },
    { id: '1xW_aoskDlWt7wL-qLoK4c6gk7PnqEgSg', name: '2. Script definición de procesos' },
  ];

  title4 = "Requerimientos"
  driveFiles4: DocDrive[] = [
    { id: '1KbhoZuvl6dEAaU6WLyTRUVuPI1JNlKAk', name: '1. Plantilla Caso de Prueba' },
    { id: '1KsrOCQvOfVXTQm0qTyxqF0MdObniMXlW', name: '2. Plantilla de Evaluación de Requerimientos' },
    { id: '1U0a3Kzkmtll8A6cMVT715xtR7mDkqiRx', name: '3. Script Fase de requerimientos' },
    { id: '1ZGu5S2uze6j1aB3i_MFlfzOLsJDaqV-N', name: '4. Documento de requerimientos' },
    { id: '1gB1FyB0o4M7kopzstrJfm3hzglv-yY0J', name: '5. Documento especificación de plan de requerimiento' },
    { id: '10N6TqeTCo9b9ML2O5GuqKMr-JqlaMrpz', name: '6. DT_Ptl_DetalleCasoPrueba  Agendar cita' },
    { id: '1Xicch0p5ML7V4e_tuTQtc4JGBf1Swj2G', name: '7. DT_Ptl_DetalleCasoPrueba  Historial medico' },
    { id: '10ZL4M59o6Vmj6UZCoI4X_fhvphb4EmIa', name: '8. Escenario de Calidad Usabilidad' },
    { id: '1Yk7s5G33TMIjhKkNhp9XyZ3ug8GeVLZA', name: '9. Plantilla Escenario de Calidad' },
    { id: '1jze-vjWS7OMKrzdeOznkrKTwJ1t4deGd', name: '10. Viejo Escenario de Calidad ' },
  ];

  title5 = "Pruebas"
  driveFiles5: DocDrive[] = [
    { id: '1-AX522bgMo9wYXEC0hixJRi7KWXcMBQq', name: '1. DT_Ptl_DetalleCasoPrueba  Agendar cita' },
    { id: '11rIx0f4iCvSnoD4v3Abklb_0u6f3B86h', name: '2. DT_Ptl_DetalleCasoPrueba  Historial medico' },
    { id: '19zcYdkz7WDsLbJzEa2ZDFUbKy0OmqqGw', name: '3. Plan de Pruebas' },
    { id: '1o1arqbEZBFNYaO5RYVb871q8fVkF_iyw', name: '4. Plantilla Plan de Pruebas' },
  ];

}
