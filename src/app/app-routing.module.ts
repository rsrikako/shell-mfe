import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cr/crForm', pathMatch: 'full'},
  {
  path: 'cr',
  loadChildren: () =>
    loadRemoteModule({
      remoteName: 'crForm',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: 'CrFormModule',
    }).then(m => m.CrFormModule),
},
{
  path: 'search',
  loadChildren: () =>
    loadRemoteModule({
      remoteName: 'search',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: 'SearchModule',
    }).then(m => m.SearchModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
