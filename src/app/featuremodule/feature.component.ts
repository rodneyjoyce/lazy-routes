import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('featureComponent')
  }

}
