import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

@NgModule({
	declarations: [
		AdminListComponent,
  		AdminDetailComponent
	],
	imports: [
		AdminRoutingModule,
		CommonModule,
		FormsModule,
		MatTableModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule
	]
	
})
export class AdminModule { }
