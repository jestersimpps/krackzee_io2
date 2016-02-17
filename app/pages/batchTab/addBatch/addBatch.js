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

    let newBatch = {
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
    });
    ∫
    this.params.get('batchTab').saveBatch(newBatch);

    this.nav.pop();
  }



}
