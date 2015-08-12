import {Component, View, NgFor, Http, Headers} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Item} from './item';

@Component({
    selector: 'item-list'
})

@View({
    templateUrl: './components/cart/cart.html',
    directives: [NgFor]
})

export class Cart {

    result: Object;
    error: Object;
    items: Array<Item> = [];

    constructor(public http: Http){
        http.get('http://0.0.0.0:3000/api/products').toRx().map(res => res.json()).subscribe(result => this.result = result);
    }

    // addProduct(name:string, product_id:number, dsc:string, price:number, image:string, id:string) {
    //   return this.http.post('http://0.0.0.0:3000/api/products', JSON.stringify(new Item(name,product_id, dsc, price, image, id),
    //   {
    //     headers: new Headers({
    //       'Content-Type': 'application/json'
    //     })
    //   }).toRx().map(res => res.json());
    // }

    addProduct(name:string, product_id:number, dsc:string, price:number, image:string, id:string) {
     return this.http.post('http://0.0.0.0:3000/api/products',
       JSON.stringify(new Item(name,product_id, dsc, price, image, id)),
       {
         headers: new Headers({
           'Content-Type': 'application/json'
         })
       })
       .toRx()
       .map(res => res.json());
   }

}
