import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { ToastService } from '../../services/toast/toast.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [  CommonModule, FormsModule , ReactiveFormsModule, MatIconModule ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    public toastService: ToastService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Logging in:', username, password);
      this.toastService.addToast('¡Inicio de sesión exitoso!', 'success'); // Mostrar mensaje de éxito

      setTimeout(() => {
        this.router.navigate(['/home']); // Navegar a /main después de 3 segundos
      }, 1000);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      this.toastService.addToast(this.errorMessage, 'error'); // Mostrar mensaje de error
    }
  }

}
