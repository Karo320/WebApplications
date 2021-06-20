import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero' },
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Spider Man' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Black Widow' },
      { id: 15, name: 'Loki' },
    ];
    return { heroes };
  }
}
