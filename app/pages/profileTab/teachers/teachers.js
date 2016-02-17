import {
  Page,
  NavController
} from 'ionic/ionic';

import {
  addTeacherPage
} from './addTeacher/addTeacher';

import {
  editTeacherPage
} from './editTeacher/editTeacher';


@Page({
  templateUrl: 'build/pages/profileTab/teachers/teachers.html'
})


export class teachersPage {
  constructor(nav: NavController) {

    this.nav = nav;

    this.teachers = [{
      name: 'Teacher 1',

    }, {
      name: 'Teacher 2',

    }, {
      name: 'Teacher 3',

    }, ];
  }

  addTeacher() {
    this.nav.push(addTeacherPage, {
      TeacherTab: this
    });
  }

  viewTeacher(b) {
    this.nav.push(editTeacherPage, {
      Teacher: b
    });
  }
}
