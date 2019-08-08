import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { UsercompComponent } from './components/usercomp/usercomp.component';
import { QuartermasterComponent } from './components/quartermaster/quartermaster.component';
import { AssemblerComponent } from './components/assembler/assembler.component';


const routes: Routes = [

  {path: "login", component: LoginComponent},
  {path: "order", component: OrderComponent},
  {path: "contact", component: ContactComponent},
  {path: "register", component: RegisterComponent},
  {path: "usercomp", component: UsercompComponent},
  {path: "assembler", component: AssemblerComponent},
  {path: "quartermaster", component: QuartermasterComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
