import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardService {
    baseUri: string = 'http://localhost:3000/api'
    params: URLSearchParams = new URLSearchParams();
    
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http){ 
    }

    createUser(user: string){
        return this.http.post(this.baseUri + "/users/", {nickname: user}).map(response => response.json());
    }

    getCards(tag: string){
        this.params.set('tag', tag);
        return this.http.get(this.baseUri + "/messages/", { search: this.params }).map(response => response.json());
    }

    postCard(message: string, user: string, tag: string){
        return this.http.post(this.baseUri + "/messages/", {"nickname": user, "message": message, "numComments": 0, "upvotes": 0, "tag": tag}).map(response => response.json());
    }

    upvote(message: string, user: string){
        return this.http.post(this.baseUri + "/users/upvote/", {"nickname": user, "message": message}).map(response => response.json());;
    }

    downvote(message: string, user: string){
        return this.http.post(this.baseUri + "/users/downvote/", {"nickname": user, "message": message}).map(response => response.json());;
    }

    postComment(nickname: string, message: string, userComment: string, commentValue: string){
        return this.http.post(this.baseUri + "/messages/comment/", {"nickname": nickname, "message": message, "userComment": userComment, "commentValue": commentValue}).map(response => response.json());
    };



}