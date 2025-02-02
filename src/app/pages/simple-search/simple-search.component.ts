import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResult, SearchService } from '../../services/search.service';

@Component({
  selector: 'app-simple-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './simple-search.component.html',
  styleUrl: './simple-search.component.css'
})
export class SimpleSearchComponent {
  searchTerm: string = '';
  searching: boolean = false;
  searchResults: SearchResult[] = [];

  constructor(
    private searchService: SearchService
  ) {}

  onSearch() {
    this.searchResults = this.searchService.simpleSearch(this.searchTerm);
    this.searching = true;
  }
}
