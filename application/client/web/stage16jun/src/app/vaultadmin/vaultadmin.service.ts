import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
    constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

    Getallcredits(): Observable<any> {
      return this.http.get(this.sharedService.WEB_API + '/scm');
    }

    StoreExternalVaultUrlAdd(vaultData:any): Observable<any> {
      return this.http.post(this.sharedService.WEB_API + '/scm/external', vaultData);
    }

    StoreExternalVaultUrlUpdate(vaultUpdate:any): Observable<any> {
      return this.http.put(this.sharedService.WEB_API + '/scm/external/update', vaultUpdate);
    }

    StoreExternalVaultUrlDelete(id:any): Observable<any> {
      return this.http.delete(this.sharedService.WEB_API + `/scm/external/${id}`);
    }

    StoreExternalVaultUrlAll(): Observable<any> {
      return this.http.get(this.sharedService.WEB_API + '/scm/external');
    }
}
