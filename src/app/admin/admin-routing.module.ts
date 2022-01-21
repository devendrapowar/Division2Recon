import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminResolver } from './admin.resolver';

const routes: Routes = [
	{
		path: '',
		component: AdminListComponent
	},
	{
		path: 'view/:id',
		component: AdminDetailComponent,
		resolve: {
			details: AdminResolver
		  }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
