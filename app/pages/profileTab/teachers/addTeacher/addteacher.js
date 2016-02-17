import {
  Page,
  NavController,
  NavParams
} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/profileTab/teachers/addTeacher/addteacher.html'
})


export class addTeacherPage {
  constructor(nav: NavController, params: NavParams) {

    this.nav = nav;
    this.params = params;


  }

  saveTeacher() {

    let newTeacher = {
      name: 'Teacher 4',
      fee: 3500,
      intake: 20,
      teachers: [{
        fullName: 'prof bob de bouwer'
      }]
    });
    ∫
    this.params.get('TeacherTab').saveTeacher(newTeacher);

    this.nav.pop();
  }



}
