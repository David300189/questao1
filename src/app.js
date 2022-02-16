import { LightningElement } from "lwc";

export default class App extends LightningElement {
   cod = 1;
   name ="Pranini";
   phone = "995667622";
   email = "pranini@soulcode";
   rating = "hot";



   alterarValores(){

      if(this.name == "Pranini"){
            this.name = "Filipe";
            this.cod = 2;
            this.phone = "995347355";
            this.email = "filipe@soulcode";
            this.rating = "cold";
      }else{
            this.cod = 1;
            this.name ="Pranini";
            this.phone = "995667622";
            this.email = "pranini@soulcode";
            this.rating = "hot";
      }

   }

}