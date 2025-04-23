import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private metaService: MetaService
  ) {
    // Update meta tags for login page
    this.metaService.updateTags({
      title: 'Login - Angular Routing Demo',
      description: 'Login to access protected routes and admin features'
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.isLoading = true;
      this.error = '';

      // Simulate network delay
      setTimeout(() => {
        if (this.authService.login(this.username, this.password)) {
          const redirectUrl = localStorage.getItem('redirectUrl') || '/admin';
          localStorage.removeItem('redirectUrl');
          this.router.navigateByUrl(redirectUrl);
        } else {
          this.error = 'Invalid credentials. Try username: admin, password: admin';
        }
        this.isLoading = false;
      }, 800);
    }
  }
}
