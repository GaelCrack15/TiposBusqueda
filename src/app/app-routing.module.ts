import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleSearchComponent } from './pages/simple-search/simple-search.component';
import { AdvancedSearchComponent } from './pages/advanced-search/advanced-search.component';

const routes: Routes = [
  {
    path: '', component: SimpleSearchComponent
  },
  {
    path: 'simple', component: SimpleSearchComponent
  },
  {
    path: 'advanced', component: AdvancedSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
