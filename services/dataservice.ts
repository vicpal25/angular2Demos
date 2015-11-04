class DataService {
  items:Array<any>;

  constructor() {
    this.items = [
      { name: 'Christoph Burgdorf' },
      { name: 'Pascal Precht' },
      { name: 'thoughtram' }
    ];
  }

  getItems() {
    return this.items;
  }
}
