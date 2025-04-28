import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DocDrive } from '../../../../types';
import { ListFilesDriveComponent } from '../../shared/list-files-drive/list-files-drive.component';

@Component({
  selector: 'app-iniciales',
  imports: [ CommonModule, ListFilesDriveComponent ],
  templateUrl: './iniciales.component.html',
  styleUrl: './iniciales.component.css'
})
export class InicialesComponent {
  title = "Documentos - Actas"
  driveFiles: DocDrive[] = [
    { id: '1nEzdtRMCyUYGJ20LiIIuM8R93sCPz_8a', name: '1. Acta de Iniciación' },
    { id: '1MxDLA-t-m5eC-387MX4Ew8Z1UeFMg2Ll', name: '2. Documento de Estrategia' },
    { id: '1zBWwu7fmbIS8Kq7RsXXOf-W_BlAyIzYp', name: '3. Tabla métricas de calidad' },
    { id: '1E9SOcyEE2_Ra9CEmvhKHP-ZsnyeIOj0m', name: '4. Plan de riesgos' },
    { id: '1oZxsT63vqPHzVPQTYAQvd9syQ_jdE5Ap', name: '5. Maestro de documentos' },
    { id: '15o4jWk2MLJbO4FP_cjV8PkO3mB-Bxtj8', name: '6. Plan de administración de configuración' },
    { id: '12uaec6FjWA8wppChRgv8jCJpwCAbvk-h', name: '7. Informe Semanal 22/4' }
  ];

  title2 = "Bitacoras - Cambios"
  driveFiles2: DocDrive[] = [
    { id: '1Zo4qrBJHi4pbcCcwf-VILbFI8hzirEEQ', name: '1. Bitácora General' },
    { id: '1vU0FGmt72GIxUms7lNWbGAMZnhuGIvg6', name: '2. Control de Asignaciones' },
    { id: '1DCmLVunsjDpmt5Mo3n6ndRz5xQaSkZ0M', name: '3. Control de cambios' },
    { id: '1m0_jjGnHiXVWxCq-kznG3XjhBhXftjqx', name: '4. Log de defectos Continuo' },
    { id: '1HJhuA8zbhC9vtu1r-d5Pe7RiNhRPLyem', name: '5. Plantilla Informe semanal' }
  ];

  title3 = "Scripts"
  driveFiles3: DocDrive[] = [
    { id: '1xW_aoskDlWt7wL-qLoK4c6gk7PnqEgSg', name: '1. Script Definición de procesos' },
    { id: '1bqcREWhM4kcZOZL0WXrQWBA1OT-NlUx0', name: '2. Script Estrategia' },
    { id: '1U0a3Kzkmtll8A6cMVT715xtR7mDkqiRx', name: '3. Script Fase de requerimientos' },
    { id: '1JB_9N8jK9dOjk7Agcy-4AHX7EXNZlKP4', name: '4. Script General' }
  ];

  title4 = "Vistas"
  driveFiles4: DocDrive[] = [
    { id: '1oyRsKQWY_cJhCrvdHMQYsRb3heyoa97-', name: '1. Vista de Contexto' },
    { id: '1hP8W2q6PUtDXIO7uIcK-7fGuhn_VHPey', name: '2. Vista de Despliegue' },
    { id: '11aKhwi9hE4YEEdIj1mePnnEH_4RZB9eQ', name: '3. Vista de Información' },
    { id: '1M6oOppQHSBL2Gd4Dk3_h8DrS1bZH_6W6', name: '4. Vista Funcional' }
  ];
}
