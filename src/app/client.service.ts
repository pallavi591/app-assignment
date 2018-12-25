import { Client } from './client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
client: Client[];
  constructor() { }
}
