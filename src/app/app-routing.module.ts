import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDumpComponent } from './data-dump/data-dump.component';

const routes: Routes = [
  {path:'data',component:DataDumpComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
