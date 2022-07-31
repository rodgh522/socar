import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { MainComponent } from "./pages/main/main.component";
import { AuthGuard } from '~/app/@core/service/auth.guard';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: 'landing', component: LandingComponent }, 
      { path: "main", component: MainComponent, canActivate: [ AuthGuard ] },
    ]
    // path: '', redirectTo: '/login', pathMatch: 'full',
  },
  { path: "login", loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: "join", loadChildren: () => import('./pages/join/join.module').then(m => m.JoinModule)},
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
