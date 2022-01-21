import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AdminService } from "./admin.service";

@Injectable({ providedIn: 'root' })
export class AdminResolver implements Resolve<any> {
  constructor(private adminService: AdminService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.adminService.getDetails(route.paramMap.get('id'));
  }
}