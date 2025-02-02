import { Injectable } from '@angular/core';

export interface SearchResult {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private mockData: SearchResult[] = [
    {
      id: 1,
      title: 'Angular Development',
      description: 'Learn Angular framework basics',
      category: 'categoria1',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'TypeScript Programming',
      description: 'Advanced TypeScript concepts',
      category: 'categoria2',
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Full stack web development course',
      category: 'categoria1',
      date: '2024-02-01'
    },
    {
      id: 4,
      title: 'JavaScript Basics',
      description: 'Introduction to JavaScript',
      category: 'categoria3',
      date: '2024-02-10'
    }
  ];

  simpleSearch(term: string): SearchResult[] {
    if (!term.trim()) return this.mockData;
    term = term.toLowerCase();
    return this.mockData.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
  }

  advancedSearch(criteria: {
    keyword: string,
    category: string,
    dateFrom: string,
    dateTo: string
  }): SearchResult[] {
    return this.mockData.filter(item => {
      const matchesKeyword = !criteria.keyword ||
        item.title.toLowerCase().includes(criteria.keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(criteria.keyword.toLowerCase());

      const matchesCategory = !criteria.category ||
        item.category === criteria.category;

      const itemDate = new Date(item.date);
      const matchesDateFrom = !criteria.dateFrom ||
        itemDate >= new Date(criteria.dateFrom);
      const matchesDateTo = !criteria.dateTo ||
        itemDate <= new Date(criteria.dateTo);

      return matchesKeyword && matchesCategory && matchesDateFrom && matchesDateTo;
    });
  }
}
