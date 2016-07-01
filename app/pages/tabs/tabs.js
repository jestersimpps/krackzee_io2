import {Page} from 'ionic/ionic';
import {profileTab} from '../profileTab/profileTab';
import {batchTab} from '../batchTab/batchTab';
import {studentTab} from '../studentTab/studentTab';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.profileTab = profileTab;
    this.batchTab = batchTab;
    this.studentTab = studentTab;
  }
}
