import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

import {
  contactPage
} from './contact/contact';

import {
  coursesPage
} from './courses/courses';

import {
  teachersPage
} from './teachers/teachers';

import {
  profilePage
} from './profile/profile';

import {
  teachingcentersPage
} from './teachingcenters/teachingcenters';


@Page({
  templateUrl: 'build/pages/profileTab/profileTab.html'
})


export class profileTab {
  constructor(nav: NavController, params: NavParams) {

    this.nav = nav;
    this.params = params;

  }

  openContact() {
    this.nav.push(contactPage, {
      profileTab: this
    });
  }
  openCourses() {
    this.nav.push(coursesPage, {
      profileTab: this
    });
  }
  openProfile() {
    this.nav.push(profilePage, {
      profileTab: this
    });
  }
  openTeachers() {
    this.nav.push(teachersPage, {
      profileTab: this
    });
  }
  openTeachingcenters() {
    this.nav.push(teachingcentersPage, {
      profileTab: this
    });
  }
}
