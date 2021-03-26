import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-courses',
                // <courses> "courses"
                // <div calss="courses"> ".courses"
                // <div id="courses"> "#courses"
    templateUrl: './courses.component.html',
})
export class CoursesComponent {
    colspan = 2;
    title = 'list of courses';
    email = 'wh@wh.com';
    courses: any;
    course = {
        title: 'the course title',
        rating: 4.9745,
        students: 30123,
        price: 190.9512,
        releaseDate: new Date(),
        disc: `An interface that is implemented by pipes in order to perform a transformation.
        Angular invokes the transform method with the value of a binding as the first argument,
        and any parameters as the second argument in list form`
    };
    viewMode = 'map';

    constructor(service: CoursesService) {
    this.courses = service.getCourses();
    }

    onKeyUp(): void {
        console.log(this.email);
    }
    onDivClick(): void {
        console.log('Div was cliked');
    }
    onSave($event: any): void {
        $event.stopPropagation();
        console.log('Button was cliked', $event);
    }
    trackCourses(index: any, course: any): any {
        return course ? course : undefined;
    }
}
