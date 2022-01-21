import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
  public details: any;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.details = data['details'];
    console.log('get data', this.details);
  }

  back(): void {
    this.location.back()
  }

}
