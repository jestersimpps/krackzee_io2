import {
  Page,
  NavController,
  NavParams
} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/batchTab/addBatch/addbatch.html'
})


export class addBatchPage {
  constructor(nav: NavController, params: NavParams) {

    this.nav = nav;
    this.params = params;


  }

  saveBatch() {

    let newBatch = {
      name: 'batch 4',
      fee: 3500,
      intake: 20,
      teachers: [{
        fullName: 'prof bob de bouwer'
      }]
    });
    ∫
    this.params.get('batchTab').saveBatch(newBatch);

    this.nav.pop();
  }



}
