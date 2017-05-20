import { Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class AppService{
private _url:string="assets/employee.json";
    constructor(private _http:Http){

    }
    getEmployee(){
        return this._http.get(this._url).map((res:Response)=>res.json())
    }
}
