import {
  Page,
  NavController
} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/batchTab/batchTab.html'
})


export class batchTab {
  constructor() {

    this.batches = [{
      name: 'batch 1'
    }, {
      name: 'batch 2'
    }, {
      name: 'batch 3'
    }, ];
  }

  addBatch() {
    this.nav.push(AddBatchPage, {
      batchTab: this
    });
  }

  viewBatch(){
    
  }
}
