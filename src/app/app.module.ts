import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { WebViewExtModule } from "@nota/nativescript-webview-ext/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  imports: [NativeScriptModule, AppRoutingModule, WebViewExtModule],
  declarations: [AppComponent, LandingComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
