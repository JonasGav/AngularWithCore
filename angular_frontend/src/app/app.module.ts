import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from "./helpers";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

import { AlertComponent } from "./components";
import { JwtInterceptor, ErrorInterceptor } from "./helpers";
import { HomeComponent } from "./pages/home";
import { LoginComponent } from "./pages/login";
import { RegisterComponent } from "./pages/register";
import { NavComponent } from "./pages/nav/nav.component";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, routing],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
