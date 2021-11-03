import { Input, Pipe, PipeTransform } from '@angular/core';
import { Tenant } from '../models/tenant.model';

@Pipe({
  name: 'searchByTenantType'
})
export class SearchByTenantTypePipe implements PipeTransform {

  @Input() tenants:Tenant[];

  transform(tenants, searchType:string): any {
    if (searchType === '' || searchType==undefined) {
      return tenants;
    } 
    else {
      let filteredItems = tenants.filter(
        (tenant) => (tenant.tenant_type.toLowerCase().indexOf(searchType.toLowerCase()) !==-1 )
      );
      return filteredItems;
    }
  }
}
