import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeFormComponent,
    SidebarComponent,
    MainComponent,
    ReactiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
