import {
  Page,
  NavParams
} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/batchTab/editBatch/editbatch.html'
})


export class editBatchPage {
  constructor( params: NavParams) {

    this.params = params;
    this.name = this.params.get('batch').name;

  }

  saveBatch() {


  }



}
