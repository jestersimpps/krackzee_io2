import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/profileTab/profile/profile.html'
})
export class profilePage {
  constructor(nav: NavController, params: NavParams) {

      this.nav = nav;
      this.params = params;

  }


}
