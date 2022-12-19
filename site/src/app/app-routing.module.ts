import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { WagensComponent } from './pages/wagens/wagens.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'wagens', component: WagensComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
