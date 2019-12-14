import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ReactiveForms";
  sampleForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      name: this.fb.control(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.sampleForm.value);
  }
}
