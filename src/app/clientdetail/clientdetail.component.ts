import { endClientList, clientList, orgsList, vendorList } from './../mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {

  endClient = endClientList;
  client = clientList;
  orgs = orgsList;
  vendors = vendorList;
  constructor() {
  }

  ngOnInit() {
  }

  addClient():void{
    this.client.push({id: this.client.length+1, name: '', website: ''});
  }

  deleteClient(data):void{
    const index: number = this.client.indexOf(data);
    if (index !== -1) {
        this.client.splice(index, 1);
    }
  }

  addVendor():void{
    this.vendors.push({id: this.vendors.length+1, name: '', website: ''});
  }

  deleteVendor(data):void{
    const index: number = this.vendors.indexOf(data);
    if (index !== -1) {
        this.vendors.splice(index, 1);
    }
  }

}
