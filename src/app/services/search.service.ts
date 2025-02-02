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
  public mockData: SearchResult[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      category: 'Drama',
      date: '1994-09-22'
    },
    {
      id: 2,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      category: 'Crime',
      date: '1972-03-24'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      category: 'Action',
      date: '2008-07-18'
    },
    {
      id: 4,
      title: 'The Godfather Part II',
      description: 'The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      category: 'Crime',
      date: '1974-12-20'
    },
    {
      id: 5,
      title: '12 Angry Men',
      description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      category: 'Drama',
      date: '1957-04-10'
    },
    {
      id: 6,
      title: 'Schindler\'s List',
      description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      category: 'History',
      date: '1993-12-15'
    },
    {
      id: 7,
      title: 'The Lord of the Rings: The Return of the King',
      description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      category: 'Adventure',
      date: '2003-12-17'
    },
    {
      id: 8,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      category: 'Crime',
      date: '1994-10-14'
    },
    {
      id: 9,
      title: 'The Good, the Bad and the Ugly',
      description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
      category: 'Western',
      date: '1966-12-29'
    },
    {
      id: 10,
      title: 'Fight Club',
      description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      category: 'Drama',
      date: '1999-10-15'
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
