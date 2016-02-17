import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/profileTab/teachers/teachers.html'
})
export class teachersPage {
  constructor(nav: NavController, params: NavParams) {

      this.nav = nav;
      this.params = params;

  }


}
