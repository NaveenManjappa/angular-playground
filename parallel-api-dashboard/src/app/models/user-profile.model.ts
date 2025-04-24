export interface UserInfo {
  id:number;
  name:string;
  email:string;
  joinDtae:string;
}

export interface UserSettings {
  userId:number;
  theme:'light' | 'dark';
  notificationsEnabled:boolean;
  language:string;
}

export interface UserNotification {
  id:string;
  message:string;
  read:boolean;
  timestamp:string;
}

export interface UserProfileData {
  userInfo:UserInfo | null;
  settings: UserSettings | null;
  notifications:UserNotification[] | null;
}