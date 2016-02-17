import {
  Page,
  NavParams
} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/profileTab/teachers/editTeacher/editteacher.html'
})


export class editTeacherPage {
  constructor( params: NavParams) {

    this.params = params;
    this.name = this.params.get('Teacher').name;

  }

  saveTeacher() {


  }



}
