import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResult, SearchService } from '../../services/search.service';

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class AdvancedSearchComponent {
  searchCriteria = {
    keyword: '',
    category: '',
    dateFrom: '',
    dateTo: ''
  };
  searchResults: SearchResult[] = [];
  searching: boolean = false;

  constructor(
    private searchService: SearchService
  ) {}

  onSearch() {
    this.searchResults = this.searchService.advancedSearch(this.searchCriteria);
    this.searching = true;
  }
}
