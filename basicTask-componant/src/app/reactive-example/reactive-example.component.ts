import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.scss']
})
export class ReactiveExampleComponent implements OnInit {
  studentData : FormGroup ;
 
  constructor() {}
  ngOnInit() {
    this.studentData = new FormGroup({
      name: new FormControl('Sammy'),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
