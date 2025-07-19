import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login-page',
    imports: [RouterLink, ReactiveFormsModule],
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

    loginFormGroup: FormGroup;

    constructor(private authService: AuthService,
        private router: Router,
        private toast: ToastrService,
    ) { }

    ngOnInit(): void {
        this.loginFormGroup = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
        })
    }

    onSubmit(): void {
        if (this.loginFormGroup.valid) {
            const formData = this.loginFormGroup.value;
            // this.authService.login(formData.username, formData.password)
            //     .subscribe({
            //         next: (response) => {
            //             this.toast.success('Login successful', 'Success');
            //             this.router.navigate(['/']);
            //         },
            //         error: (error) => {
            //             console.error('Login failed:', error);
            //             this.toast.error('Login failed. Please check your username and password.', 'Error');

            //         }
            //     });
        } else {
            console.log('Login form is invalid');
        }
    }
}
