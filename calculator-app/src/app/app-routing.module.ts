import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading-screen',
    pathMatch: 'full'
  },
  {
    path: 'loading-screen',
    loadChildren: () => import('./loading-screen/loading-screen.module').then( m => m.LoadingScreenPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sample',
    loadChildren: () => import('./sample/sample.module').then( m => m.SamplePageModule)
  },
  {
    path: 'scical',
    loadChildren: () => import('./scical/scical.module').then( m => m.ScicalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
