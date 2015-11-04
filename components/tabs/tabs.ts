import {Component, View, NgFor, Http, Headers, CSSClass} from 'angular2/angular2';

@Component({
  selector: 'tabs'
})
@View({
  template: `
    <ul>
      <li>Tab 1</li>
      <li>Tab 2</li>
    </ul>
  `
})
export class Tabs {

}
