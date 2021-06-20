import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl, Cities } from '../constants';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-weatherhome',
  templateUrl: './weatherhome.component.html',
  styleUrls: ['./weatherhome.component.css']
})
export class WeatherhomeComponent implements OnInit {
  title: string = "Weather App"
  cities = Cities;
  baseUrl: string = BaseUrl;
  cityData: any[] = [];
  counter: any = 0;
  cData: any = [];
  error: boolean=false;
  constructor(private http: HttpClient, private route: Router, private helper: HelperService) { }

  ngOnInit() {
    let that = this;
    this.cities.forEach(function (item) {
      that.getWeatherData(item.name, item.id);
    });
  }
  getWeatherData(cityname, cityid): any {
    // var url = this.baseUrl + "weather?q=" + cityname + "&appid=0d82ab68f2c379a4b829896547582b52&units=metric";
    //App id need to keep in DB and fetchit from backend
    var url = this.baseUrl + "weather?q=" + cityname + "&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric";
    this.http.get(url).subscribe((res: any) => {
      this.counter++;
     
      if (res!=undefined && res != "" && res != null) {
        this.cData.push(res);
        if (this.counter >= this.cities.length) {
          //Sorting of all cities in accending order
          this.cityData = this.cData.sort((a, b) => {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
          });
        }
      } else {
        this.error=true;
        this.helper.ErrorMessage("Something Went Wrong", this.title);

      }

    }, (error) => {
      this.error=true;
      this.helper.ErrorMessage("Something Went Wrong", this.title);
    })
  }

  RoundDegrees(deg): number {
    return this.helper.Round(deg);
  }
  SetImage(data): string {
    var iconname = data.weather[0].icon;
    return this.helper.SetImage(iconname);
  }
  ShowDateTime(ndate, offSet, flag): string {
    return this.helper.DateTimeFormat(ndate, offSet, flag);
  }
  GetWeatherDescription(des) {
    var str = "";
    if (des != "") {
      str = des.charAt(0).toUpperCase() + des.toLowerCase().slice(1);
    }
    return str;
  }
  GotoDetails(data) {
    if (data.name && data.name != "") {
      this.helper.setCityname(data.name);
      this.helper.setTimeZone(data.timezone);
      this.helper.setData(data);
      this.route.navigate(["/weather-details"]);
    }
  }
}
