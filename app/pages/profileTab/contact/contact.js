import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/profileTab/contact/contact.html'
})
export class contactPage {
  constructor(nav: NavController, params: NavParams) {

      this.nav = nav;
      this.params = params;

  }


}
