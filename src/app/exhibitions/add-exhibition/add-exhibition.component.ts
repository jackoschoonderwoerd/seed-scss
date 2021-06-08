import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-exhibition',
  templateUrl: './add-exhibition.component.html',
  styleUrls: ['./add-exhibition.component.scss']
})
export class AddExhibitionComponent implements OnInit {

  exhibitionForm: FormGroup;
  slideForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeExhibitionForm()
  }
  initializeExhibitionForm() {
    this.exhibitionForm = this.fb.group({
      'title': new FormControl('name', [Validators.required]),
      'start-exhibition': new FormControl(null),
      'end-exhibition': new FormControl(null),
      'artist-names': new FormArray([]),
      'slides': new FormArray([
        this.slideForm  = this.fb.group({
          'slideName': new FormControl('new Slide')
        })
      ])
       
    })
  }
  onAddExhibition() {
    console.log(this.exhibitionForm.value);
  }
  onAddArtistName() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.exhibitionForm.get('artist-names')).push(control)
  }
  getHobbies() {
    return this.exhibitionForm.controls.orderItems as FormArray;
  }
  onAddSlide() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.slideForm.get('slideName')).push(control)
  }
  // onCancel(i) {
  //   console.log(i);
  //   this.exhibitionForm.get('hobbies').value.splice(i);
  //   console.log(this.exhibitionForm.get('hobbies').value)
  // }

}
