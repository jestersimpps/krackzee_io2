import {Page} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/profileTab/profileTab.html'
})
export class profileTab {
  constructor() {



  }

  openNavDetailsPage(item){
    this.nav.push(addItemPage,{profileTab:this});
  }
}
