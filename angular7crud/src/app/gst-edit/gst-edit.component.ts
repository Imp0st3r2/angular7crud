import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, 
    private bs: BusinessService) { 
      this.createForm();
  }

  createForm() { 
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getBusinessById(params['id']).subscribe(res => {
        this.business = res;
        this.angForm.get('person_name').setValue(this.business.person_name);
        this.angForm.get('business_name').setValue(this.business.business_name);
        this.angForm.get('business_gst_number').setValue(this.business.business_gst_number);
      });
    });
  }

  updateBusiness(person_name, business_name, business_gst_number){
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(person_name, business_name, business_gst_number, params['id']).subscribe((data: string) =>{
        console.log(data);
        this.router.navigate(['business']);
      });
    })
  }

}
