import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';

const routes: Routes = [
  // {path: '', component: SidebarComponent},
  {path:'reactiveformExample', component: ReactiveExampleComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
  