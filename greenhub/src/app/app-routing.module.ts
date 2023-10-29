import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/auth/auth/auth.component";
import {NgModule} from "@angular/core";
import {Path} from "./models/enums/path";
import { isAuthGuard } from "./components/guards/is-auth.guard";
import { RestorePasswordComponent } from "./components/auth/restore-password/restore-password.component";
import { NewPasswordComponent } from "./components/auth/new-password/new-password.component";


const routes: Routes = [
  { path: '', redirectTo: Path.auth, pathMatch: 'full' },
  { path: Path.auth, component: AuthComponent },
  {
    path: 'crm',
    loadChildren: () => import('./components/main/main.module').then(m => m.MainModule),
    canActivate: [isAuthGuard]
  },
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'new-password', component: NewPasswordComponent },
  { path: '**', redirectTo: Path.auth },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
