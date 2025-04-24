import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, retry, switchMap, timer } from 'rxjs';
import { UserInfo, UserProfileData, UserSettings,UserNotification } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly userInfoUrl='/assets/mocks/user-info.json';
  private readonly settingsUrl='/assets/mocks/user-settings.json';
  private readonly notificationsUrl='/assets/mocks/notifications.json';
  constructor(private http:HttpClient) { }

  private getPersonalInfo():Observable<UserInfo | null>{
    console.log('Requesting personal info...');
    return timer(1000).pipe(
      switchMap(() => {
        return this.http.get<UserInfo>(this.userInfoUrl)
      }),
      retry(1),
      catchError((error:HttpErrorResponse) => {
        console.log(`Error fetching personl info from ${this.userInfoUrl}`);
        return of(null);
      })
    );
  }

  private getSettings():Observable<UserSettings | null>{
    console.log('Requesting settings');
    return timer(1500).pipe(
      switchMap(() => this.http.get<UserSettings>(this.settingsUrl)),
      retry(1),
      catchError((error:HttpErrorResponse) => {
        console.log(`Error fetching settings from ${this.settingsUrl}`);
        return of(null);
      })
    );
  }

  private getNotifications():Observable<UserNotification[] | null>{
    console.log('Requesting Notifications');
    return timer(1500).pipe(
      switchMap(()=>this.http.get<UserNotification[]>(this.notificationsUrl)),
      catchError((error:HttpErrorResponse) => {
        console.log(`Error fetching notifications from ${this.notificationsUrl}`);
        return of(null);
      })
    );
  }

  loadUserProfileData():Observable<UserProfileData>{
    console.log('Initializing parallel fetch for all user data');
    const personalInfo$ = this.getPersonalInfo();
    const settings$ = this.getSettings();
    const notifications$ = this.getNotifications();

    return forkJoin({
      userInfo:personalInfo$,
      settings:settings$,
      notifications:notifications$
    }).pipe(
      map((res)=>{
        console.log(`All API calls finished. Results ${res}`);
        return res;
      })
    );
  }
}
