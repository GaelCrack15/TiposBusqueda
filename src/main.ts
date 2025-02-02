import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { SimpleSearchComponent } from './app/pages/simple-search/simple-search.component';
import { AdvancedSearchComponent } from './app/pages/advanced-search/advanced-search.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  template: `
    <nav>
      <a routerLink="/simple">Búsqueda Simple</a> |
      <a routerLink="/advanced">Búsqueda Avanzada</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      padding: 20px;
      background-color: #f8f9fa;
      text-align: center;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #007bff;
    }
    nav a:hover {
      text-decoration: underline;
    }
  `]
})
export class App {
  name = 'Angular';
}

const routes: Routes = [
  { path: 'simple', component: SimpleSearchComponent },
  { path: 'advanced', component: AdvancedSearchComponent },
  { path: '', redirectTo: '/simple', pathMatch: 'full' as const }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
