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

  addVendor():void{
    this.vendors.push({id: this.vendors.length+1, name: '', website: ''});
  }

}
