import { LoginComponent } from './login/login.component';
import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';

export const routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'login', component: SliderComponent },
     { path: 'cadusuario', component: CadusuarioComponent },
     { path: 'dashboard', component: DashboardComponent }
    ];