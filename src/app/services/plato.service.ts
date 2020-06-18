
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Plato } from '../model/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService extends CommonService<Plato>{
  protected miUrl = 'http://localhost:9001/api/v1/plato/';
}