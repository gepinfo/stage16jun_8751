import { Component, OnInit } from '@angular/core';
import { VaultService } from './vaultadmin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vaultadmin',
  templateUrl: './vaultadmin.component.html',
  styleUrls: ['./vaultadmin.component.scss']
})
export class VaultadminComponent implements OnInit {

  constructor(private vaultservice: VaultService, public vaultAdminservice: VaultService) { 
    this.show = false;
  }

  public displayModel: String = 'none';
  public Userdetails:any[]=[];
  public externalLink:any = null;
  private credentialsDeleteId:any = ''
  public show: boolean;
  createProject:FormGroup=new FormGroup({});

  public externalVault:any = {
    ipaddress: '',
    portnumber: '',
    username: '',
    password: '',
    version: ''
  }
  public storeExternal:any = {
    userId: '',
    credentials: [],
    role: ''
  }

  async ngOnInit() {
    await this.vaultAdminservice.StoreExternalVaultUrlAll().subscribe( (res)=> {
      if(res[0] === null || res === [] || res === {} || res[0] === undefined){
        this.externalLink = null;
      } else {
        this.externalLink = res[0].credentials[0].ipaddress+ ':' + res[0].credentials[0].portnumber;
        this.credentialsDeleteId = res[0]._id;
        this.externalVault = {
          ipaddress: res[0].credentials[0].ipaddress,
          portnumber: res[0].credentials[0].portnumber,
          username: res[0].credentials[0].username,
          password: res[0].credentials[0].password,
          version: res[0].credentials[0].version
        }
      }
    });
  }
  
  hideEye() {
    this.show = !this.show;
  }


  localvault(){
    window.open('http://'+window.location.hostname+':8200');
  }

  DeleteData() {
    this.vaultAdminservice.StoreExternalVaultUrlDelete(this.credentialsDeleteId).subscribe( (res:any)=> {
      this.externalLink = null;
      this.externalVault = {
        ipaddress: '',
        portnumber: '',
        username: '',
        password: '',
        version: ''
      }
      this.ngOnInit();
    });
  }

  UpdateModel(){
    this.displayModel = 'block';
  }

  UpdateData() {
    let data:any = {
      _id: this.credentialsDeleteId,
      credentials: []
    } 
    data.credentials.push(this.externalVault)
    this.vaultAdminservice.StoreExternalVaultUrlUpdate(data).subscribe( (res:any)=> {
      this.onCloseHandled();
      this.ngOnInit();
    });
  }

  //Open the Popup Model Box
  openModal() 
  { 
    if(this.externalLink === null){
      this.displayModel = 'block';
    } else {
      window.open(this.externalLink);
    }
  }
  onCloseHandled() 
  {
    this.displayModel = 'none';
  }

  storeExternalVault() {
    this.storeExternal.userId = sessionStorage.getItem('Id');
    this.storeExternal.credentials.push(this.externalVault);
    this.storeExternal.role = "Admin";
    this.vaultAdminservice.StoreExternalVaultUrlAdd(this.storeExternal).subscribe( (res:any)=> {
      this.storeExternal = {
        userId: '',
        credentials: [],
        role: ''
      }
      this.onCloseHandled();
      this.ngOnInit();
    })
  }
}
