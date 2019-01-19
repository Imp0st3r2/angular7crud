import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];

  constructor(private bs: BusinessService, private router: Router) { }

  ngOnInit() {
    this.getBusinesses();
  }

  editBusiness(id): void {
    this.router.navigate(['business/edit/'+id]);
  }

  deleteBusiness(id): void {
    this.bs.deleteBusiness(id).subscribe((data: string) => {
      console.log(data);
      this.getBusinesses();
    })
  }

  getBusinesses(): void {
    this.bs
    .getBusinesses()
    .subscribe((data: Business[]) => {
      this.businesses = data;
    })
  }
}
