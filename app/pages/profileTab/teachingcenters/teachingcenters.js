import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/profileTab/teachingcenters/teachingcenters.html'
})
export class teachingcentersPage {
  constructor(nav: NavController, params: NavParams) {

      this.nav = nav;
      this.params = params;

  }


}
