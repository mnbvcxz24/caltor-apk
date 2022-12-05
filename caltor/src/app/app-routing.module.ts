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
    path: 'atbashcipher',
    loadChildren: () => import('./atbashcipher/atbashcipher.module').then( m => m.AtbashcipherPageModule)
  },
  {
    path: 'caesarcipher',
    loadChildren: () => import('./caesarcipher/caesarcipher.module').then( m => m.CaesarcipherPageModule)
  },
  {
    path: 'vigenerecipher',
    loadChildren: () => import('./vigenerecipher/vigenerecipher.module').then( m => m.VigenerecipherPageModule)
  },
  {
    path: 'scicalculator',
    loadChildren: () => import('./scicalculator/scicalculator.module').then( m => m.ScicalculatorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
