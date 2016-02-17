import {
  Page,
  NavController
} from 'ionic/ionic';

import {
  addBatchPage
} from './addBatch/addBatch';

import {
  editBatchPage
} from './editBatch/editBatch';


@Page({
  templateUrl: 'build/pages/batchTab/batchTab.html'
})


export class batchTab {
  constructor(nav: NavController) {

    this.nav = nav;

    this.batches = [{
      name: 'batch 1',

    }, {
      name: 'batch 2',

    }, {
      name: 'batch 3',

    }, ];
  }

  addBatch() {
    this.nav.push(addBatchPage, {
      batchTab: this
    });
  }

  viewBatch(b) {
    this.nav.push(editBatchPage, {
      batch: b
    });
  }
}
