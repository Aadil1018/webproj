import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FbloginComponent } from './Components/fblogin/fblogin.component';
import { BaseComponent } from './Components/base/base.component';
const routes: Routes = [
  { path: '', component: FbloginComponent },
  { path: 'page', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
