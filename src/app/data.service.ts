import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) {

   }
}
