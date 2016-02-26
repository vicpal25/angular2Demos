/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind,httpInjectables} from 'angular2/angular2';
import{DemoPage} from './demo-page';
import{About} from './components/about/about';
import {routerInjectables, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {DataService} from './services/dataservice';

@Component({
   selector: 'demo-app'
})

@View({
    templateUrl: './demo-app.html',
    directives:[DemoPage, RouterLink, RouterOutlet, About]
})

@RouteConfig([
    {path: '/', component: DemoPage, as: 'home'},
    {path: '/about/:id', component: About, as: 'about'}
])

class MyDemoApp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path() === path;
    }
}

bootstrap(MyDemoApp,[httpInjectables,routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);
