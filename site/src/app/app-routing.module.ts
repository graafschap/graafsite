import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { WagensComponent } from './pages/wagens/wagens.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'wagens', component: WagensComponent },
  { path: 'admin', component: AdminComponent , canActivate: [AuthGuard]},
  { path: '',   redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
