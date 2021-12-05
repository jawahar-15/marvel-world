import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import {Md5} from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class MarvelHelperService {
   privateKey = 'dce6805ed3cf1550e7f9dd4d57b0cf920e28384c';
   publicKey ='873ef2dc8ea19d37641bb2f363f799b6';

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    const charUrl = 'https://gateway.marvel.com/v1/public/characters';
    const timestamp = +new Date();
    const md5 = new Md5();
    const hash = md5.appendStr(timestamp + this.privateKey+this.publicKey).end();
    const params = new HttpParams().append('ts', timestamp.toString()).append('apikey',this.publicKey).append('hash',hash.toString()).append('limit',100);
    return this.httpClient.get(charUrl, {params});
  }

  getCharacterWithId(id: string){
    const charUrl = 'https://gateway.marvel.com/v1/public/characters/' + id;
    const timestamp = +new Date();
    const md5 = new Md5();
    const hash = md5.appendStr(timestamp + this.privateKey+this.publicKey).end();
    const params = new HttpParams().append('ts', timestamp.toString()).append('apikey',this.publicKey).append('hash',hash.toString()).append('limit',100);
    return this.httpClient.get(charUrl, {params});
  }
}
