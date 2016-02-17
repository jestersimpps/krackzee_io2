import {
  Page,
  NavController
} from 'ionic/ionic';

import {
  addBatchPage
} from './addBatch/addBatch';


@Page({
  templateUrl: 'build/pages/batchTab/batchTab.html'
})


export class batchTab {
  constructor(nav: NavController ) {

    this.nav = nav;

    this.batches = [{
      name: 'batch 1',
      fee: 4500,
      intake: 20,
      teachers: [{
        fullName: 'prof bob de bouwer'
      }, {
        fullName: 'prof akash dol'
      }, {
        fullName: 'prof Eva zielman'
      }]
    }, {
      name: 'batch 2',
      fee: 7000,
      intake: 20,
      teachers: [{
        fullName: 'prof bob de bouwer'
      }, {
        fullName: 'prof akash dol'
      }, {
        fullName: 'prof Eva zielman'
      }]
    }, {
      name: 'batch 3',
      fee: 3500,
      intake: 20,
      teachers: [{
        fullName: 'prof bob de bouwer'
      }, {
        fullName: 'prof akash dol'
      }, {
        fullName: 'prof Eva zielman'
      }]
    }, ];
  }

  addBatch() {
    this.nav.push(addBatchPage, {
      batchTab: this
    });
  }

  viewBatch() {

  }
}
