import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../models";
import { Subscription } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  currentUser: User;
  currentUserSubscription: Subscription;
  authenticationService: any;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
    return this.http.get(`/users/` + id);
  }

  register(user: User) {
    return this.http.post(`/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`/users/` + id);
  }
  getCurrentUser() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
    return this.currentUser;
  }
}
