const title=document.getElementById("title");
const nameField=document.getElementById("nameField");
const signinBtn=docuemnt.getElementById("signinBtn");
const signupBtn=document.getElementById("signupBtn");

signupBtn.onclick=function(){
    title.innerHTML="siugn Up";
    nameField.style.display="block";
}
signinBtn.onclick=function(){
    title.innerHTML="sign in";
    nameField.style.display="block";

}