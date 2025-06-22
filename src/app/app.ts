import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-component/header-component";
import { FormComponent } from "./form-component/form-component";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ReactiveFormApp';

  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
  apiKey: "AIzaSyCz19Doy3VsoNcKepOceYlmFprKsQZP5BI",
  authDomain: "wordcounter-15848.firebaseapp.com",
  projectId: "wordcounter-15848",
  storageBucket: "wordcounter-15848.firebasestorage.app",
  messagingSenderId: "519245749011",
  appId: "1:519245749011:web:4888e3398402e8fa4158e6",
  measurementId: "G-L71DMCNFSH"
};

// Initialize Firebase
 app = initializeApp(this.firebaseConfig);
 analytics = getAnalytics(this.app);
}
