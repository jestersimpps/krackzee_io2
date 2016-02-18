import {
  Page,
  NavParams,
  NavController
} from 'ionic/ionic';

import {
  courseService
} from './courseservice';

@Page({
  templateUrl: 'build/pages/profileTab/courses/courses.html',
  providers: [courseService]
})
export class coursesPage {
  constructor(nav: NavController, params: NavParams, courseService: courseService) {

    this.nav = nav;
    this.params = params;
    this.courseService = courseService;
    this.courses = [];
    this.courseService.getBatches().subscribe(
          data => {
            this.courses = data;
            console.log(data);
          },
          err => console.log(err),
          () => console.log('Courses Fetched')
        );

  }



}
