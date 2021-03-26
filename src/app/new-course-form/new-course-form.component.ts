import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {
  form = new FormGroup({
    topics: new FormArray([])
  });

  get topics(): FormArray{
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement): void {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl): void {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
