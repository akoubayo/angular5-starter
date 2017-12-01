import { Injectable }        from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Http,
         Headers,
         BaseRequestOptions,
         RequestOptions,
         Response }          from '@angular/http';
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import { CookieService }     from 'ngx-cookie';
import { Router,
         ActivatedRoute,
         Params }            from '@angular/router';
import { Subject }           from 'rxjs/Subject';
import { environment }       from './../../../environments/environment'

@Injectable()
export class BaseService {
    private bearer:string    = "";
    private url:string       = environment.base_url;
    public headers: Headers  = new Headers();
    public connected:boolean = false;
    public subject           = new Subject<any>();
    public options:RequestOptions;

    constructor(private _http:Http, private _cookieService:CookieService, public _router: Router) {
        // Check if bearer coockie
        if (this._cookieService.get('plan_at')) {
            this.bearer = this._cookieService.get('plan_at');
            this.headers.append('Authorization', 'bearer ' + this.bearer);
        }
        //this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: this.headers });
    }

    public post = (uri, data) => {

        return this._http.post(this.url + uri, JSON.stringify(data), this.options)
        .map(res => {
            let result = res.json();

            if (result.access_token) {
                this.bearer = result.access_token;
                this.headers.append('Authorization', 'bearer ' + this.bearer);
                this.options = new RequestOptions({ headers: this.headers });
                this._cookieService.put('plan_at', this.bearer);
                this.connected = true;
                this.subject.next(true);
            }

            return result;
        })
        .catch(res => {
            return Observable.throw(res.json());
        });
    }

    public get = (uri) => {
        return this._http.get(this.url + uri, this.options)
            .map(res => {
                let result = res.json();
                return result;
            })
            .catch(res => {
                return Observable.throw(res.json());
        });
    }

    public put = (uri, data) => {
        return this._http.put(this.url + uri, JSON.stringify(data), this.options)
        .map(res => {
            let result = res.json();
            return result;
        })
        .catch(res => {
            return Observable.throw(res.json());
        });
    }

    public delete = (uri, id) => {
        return this._http.delete(this.url + uri + '/' + id, this.options)
        .map(res => {
            let result = res.json();
        })
        .catch(res => {
            return Observable.throw(res.json());
        })
    }

    public navigateTo = (state, param) => {
        this._router.navigate([state]);
    }

    public deleteBearer = () => {
        this.bearer = "";
        this.headers.delete('Authorization');
        this._cookieService.put('plan_at', this.bearer);
    }
}
