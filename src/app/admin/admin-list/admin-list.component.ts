import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
	selector: 'app-admin-list',
	templateUrl: './admin-list.component.html',
	styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
	public processList: any[];
	public displayedColumns: string[];
	public displayColumnLabels: any;
	public searchData: any;
	constructor(private adminService: AdminService, private router: Router) {
		this.processList = []; 
		this.searchData = {
			customerName: '',
			sensorData: ''
		}
		this.displayColumnLabels = {
			customerId: 'Customer Id',
			customerName: 'Customer Name',
			machineNr: 'Machine Nr',
			machineId: 'Machine Id',
			machineTypeSerial: 'Machine Type Serial',
			process: 'Process',
			processTime: 'Process Time',
			sensorData: 'Sensor Data',
			onlineFrom: 'Online From'
		}
		this.displayedColumns = ['customerName', 'machineNr', 
			 'process', 'processTime','sensorData', 'onlineFrom']
	 }

	ngOnInit(): void {
		
		this.processList = this.adminService.processList;
		console.log('this.processList', this.processList);
	}

	showDetails(details: any): void {
		console.log('details', details);
		this.router.navigate(['/admin/view/' + details.customerId]);
	}

	search(): void {
		console.log('search', this.searchData);
		this.processList = this.adminService.processList.filter((element: any) => {
			console.log(element.customerName.includes(this.searchData.customerName));
			return element.customerName.toLowerCase().includes(this.searchData.customerName.toLowerCase())
			&& element.sensorData.toLowerCase().includes(this.searchData.sensorData.toLowerCase());
		});
	}

}
