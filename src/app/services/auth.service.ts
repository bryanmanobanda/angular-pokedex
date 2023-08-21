import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  userSubject$ = new Subject<any>();

  constructor(private authFire: AngularFireAuth, public router: Router, public firestore:AngularFirestore) {
    this.authFire.authState.subscribe((user)=>{
      console.log('user', JSON.stringify('user'));
      if(user){
        this.userData = user;
        this.userSubject$.next(this.userData); //progamacion reactiva
        localStorage.setItem('user', JSON.stringify(user));
      }else{
        this.userSubject$.next(null);
        localStorage.removeItem('user');
      }
    })
   }

  loginWithEmail(email:string, password:string){
    return this.authFire.signInWithEmailAndPassword(email, password)
    .then((result) =>{
      console.log(JSON.stringify(result));
      this.storeUserData(result.user);
      this.router.navigate(['/']);
    });
  }

  registerUser(email:string, password:string){
    return this.authFire
    .createUserWithEmailAndPassword(email, password)
    .then((result) =>{
      console.log(result.user);
      this.storeUserData(result.user);
      this.router.navigate(['/verify-user']);
    });
  }

  sendVerificationEmail(){
    return this.authFire.currentUser.then((u:any) => {
      u.sendEmailVerification();
    });
  }

  get userInfo(): any{
    return this.userData;
  }

  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem("user")!);
    return  (user !== null && user.emailVerified !== false) ? true: false;
  }

  forgotPassword(emailResetEmail: string){
    return this.authFire.sendPasswordResetEmail(emailResetEmail)
    .then(()=>{
      //Se ejecute correctamente el proceso de envio de correo de res
    }).catch((error) => {
      console.log(error);
    });

  }

  logout(){
    this.authFire.signOut().then(() =>{
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  storeUserData(user: any){
    this.firestore.collection('user')
    .doc(user.uid)
    .set({
      uid:user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    })
    .then((result) =>{
      console.log(JSON.stringify(result));
    });
  }
}
