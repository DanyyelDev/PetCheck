import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule
  ]
})
export class SidenavComponent {
  option1Expanded = false;
  option2Expanded = false;

  constructor(private router: Router){}

  toggleOption1() {
    this.option1Expanded = !this.option1Expanded;
  }

  toggleOption2() {
    this.option2Expanded = !this.option2Expanded;
  }

  onSubmit() {
    this.router.navigate(['../home']);
  }
}