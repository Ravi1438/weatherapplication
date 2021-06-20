import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  cityName: string = "";
  timezone: number = 0;
  homedata: any;
  constructor(private toastService:ToastrService) { }
  setCityname(name): void {
    this.cityName = name;
  }
  getCityname(): string {
    return this.cityName;
  }
  GetDateTime(date, offset): Date {
    return new Date((date + offset) * 1000);
  }
  Round(val): number {
    return Math.round(val);
  }
  setTimeZone(tZone): void {
    this.timezone = tZone;
  }
  getTimeZone(): number {
    return this.timezone;;
  }
  setData(data): void {
    this.homedata = data;
  }
  getData() {
    return this.homedata;
  }
  SetImage(icon): string {
    var url = ""
    if (icon != undefined && icon != "") {
      url = "assets/icons/" + icon + ".svg";
      console.log(url);
    }
    return url;
  }
  DateTimeFormat(nDate, offset, flag):string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var datetime = this.GetDateTime(nDate, offset);
    var date = datetime.getDate();
    var day = datetime.getDay();
    var month = datetime.getMonth();
    var year = datetime.getFullYear();
    var hours = datetime.getHours();
    var min = datetime.getMinutes();
    if (flag == "summery") {
      return hours + ":" + min;
    } else if (flag == "weekdayname") {
      return days[day];
    } else if (flag == "totaldate") {
      return days[day] + " " + date + this.getSuffix(date) + " " + monthNames[month] + " '" + year;
    } else {
      return date + "/" + month
    }
  
  }

  getSuffix(date):string {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  //Toaster messages for errors
  SuccessMessage(message, title){
    this.toastService.success(message, title, {
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }
  ErrorMessage(message, title){
    this.toastService.error(message, title, {
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }
}
