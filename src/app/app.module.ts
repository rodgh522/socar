import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptModule } from "@nativescript/angular";
import { WebViewExtModule } from "@nota/nativescript-webview-ext/angular";
import { SharedModule } from "./@core/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from './pages/landing/landing.component';
import { MainComponent } from './pages/main/main.component';
@NgModule({
  imports: [NativeScriptModule, AppRoutingModule, WebViewExtModule, ReactiveFormsModule, SharedModule ],
  declarations: [AppComponent, LandingComponent, MainComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
