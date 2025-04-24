import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { UserInfo, UserNotification, UserProfileData, UserSettings } from '../../models/user-profile.model';
import { UserDataService } from '../../data/user-data.service';
import { finalize, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnDestroy {
  isLoading:boolean=false;
  isLoggedIn:boolean=false;
  generalErrorMessage:string | null=null;
  userData:UserProfileData | null=null;

  dataSubscription:Subscription | null =null;
  private destroy$=new Subject<void>();

  constructor(private userDataService:UserDataService){}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('Clean up signal sent in onDestroy event');
  }

  get userInfo():UserInfo | null | undefined {
    return this.userData?.userInfo;
  }
 
  get settings():UserSettings | null | undefined {
    return this.userData?.settings;
  }

  get notifications():UserNotification[] | null | undefined {
    return this.userData?.notifications;
  }

  login(){
    if(this.isLoggedIn || this.isLoading){
      console.warn('Login attempt ignored. Already logged in or in loading');
      return;
    }
    console.log('Login initiated');
    this.isLoading=true;
    this.isLoggedIn=true;
    this.userData=null;
    this.generalErrorMessage=null;
    this.dataSubscription = this.userDataService.loadUserProfileData().pipe(
      finalize(()=> {
        console.log('Data loading stream completed');
        this.isLoading=false;
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next:(data:UserProfileData)=> {
        console.log('Successfully received the data',data);
        this.userData = data;

      },
      error:(err) => {
        console.error('Unexpected error');
        this.generalErrorMessage = 'An unexpected error occured while loading the dashboard data. Please try again later!';
        this.isLoggedIn=false;
      },
      complete:() => {
        console.log('Data loading stream completed!')
      }
    });

  }

  logout(){
    if(!this.isLoggedIn){
      console.warn('Logout attempt ignored. Not logged in.');
      return;
    }

    console.log('Logout initiated');
    this.isLoggedIn=false;
    this.userData=null;
    this.generalErrorMessage=null;

    console.log('Sending cancellation signal');
    this.destroy$.next();

    this.dataSubscription=null;
    this.isLoading=false;
    console.log('Logout complete');
  }
}
