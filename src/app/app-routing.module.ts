import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'adicao', loadChildren: './adicao/adicao.module#AdicaoPageModule' },
  { path: 'subtracao', loadChildren: './subtracao/subtracao.module#SubtracaoPageModule' },
  { path: 'divisao', loadChildren: './divisao/divisao.module#DivisaoPageModule' },
  { path: 'multiplicacao', loadChildren: './multiplicacao/multiplicacao.module#MultiplicacaoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
