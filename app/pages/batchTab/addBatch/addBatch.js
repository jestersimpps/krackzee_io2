import {
  Page,
  NavController,
  NavParams
} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/batchTab/addBatch/addBatch.html'
})


export class addBatchPage {
  constructor(nav: NavController, params: NavParams) {

    this.nav = nav;
    this.params = params;


  }

  saveBatch() {
    this.nav.pop();
  }

  back() {
    this.nav.pop();
  }


}
