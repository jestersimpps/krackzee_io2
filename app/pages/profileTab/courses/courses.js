import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/profileTab/courses/courses.html'
})
export class coursesPage {
  constructor(nav: NavController, params: NavParams) {

      this.nav = nav;
      this.params = params;

  }


}
