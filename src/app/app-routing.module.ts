import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FormulaireComponent} from './modules/global/formulaire/formulaire.component'
import{AffichageComponent} from './modules/global/affichage/affichage.component'

const routes: Routes = [
  {path:'formulaire',component:FormulaireComponent},
  {path:'',component:AffichageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
