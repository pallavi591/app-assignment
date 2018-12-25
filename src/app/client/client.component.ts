import { endClientList, clientList, orgsList, vendorList } from './../mock-data';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
endClient = endClientList;
client = clientList;
orgs = orgsList;
vendor = vendorList;
  // getClient(): void {
  //   this.client = client;
  // }
  // getVendor(): void {
  //   this.client = vendor;
  // }
//datatobeedited: Client;
//data(abc: Client) {
  //this.datatobeedited = abc;
//}
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(`${result}` == "cancel"){
        this.endClient = endClientList;
        this.client = clientList;
        this.orgs = orgsList;
        this.vendor = vendorList;
      }
    });
   }
}
