// let LData = [
//   { id: "1", Fname: "Admin", Email: "Admin@gmail.com", Pass: "Admin" },
// ];
// localStorage.setItem("loginData", JSON.stringify(LData));

function Register() {
  let Fname = document.getElementById("Fname").value;
  let Email = document.getElementById("Email").value;
  let Pass = document.getElementById("Pass").value;
  let Cpass = document.getElementById("Cpass").value;
  if (Pass != Cpass) {
    
  } else {
    let LData = JSON.parse(localStorage.getItem("loginData"))||[{ id: "1", Fname: "Admin", Email: "Admin@gmail.com", Pass: "Admin" },] ;
    let Cid = LData.length + 1;
    // LData.forEach(p=>Cid++);
    let newData = { id: Cid, Fname, Email, Pass };
    LData.push(newData);
    showToast("✅ Registration successful!", "success");
    localStorage.setItem("loginData", JSON.stringify(LData));
  }
}
function Login() {
    event.preventDefault(); // ⛔ Stop form from submitting & reloading
  let LEmail = document.getElementById("LEmail").value;
  let LPass = document.getElementById("LPass").value;
  if (!LEmail || !LPass) {
  showToast("⚠️ Please enter both email and password", "error");
  return;
}

    LData=JSON.parse(localStorage.getItem("loginData"));
    // LData.forEach(I=>{
    //     if(I.Email==LEmail && I.Pass==LPass){
    //         showToast("✅ Login successful!", "success");
    //         console.log("Login sucessful");
    //     }
    //     else{

    //     }
    // })
        let foundUser = LData.find(I => I.Email === LEmail && I.Pass === LPass);
        if (foundUser) {
        showToast("✅ Login successful!", "success");
        console.log("Login successful:", foundUser.Fname);
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        document.getElementById("login-form").style.display = "none";
        document.body.classList.remove("modal-open");
        document.getElementById("LEmail").value = "";
        document.getElementById("LPass").value = "";   
    } else {
        showToast("❌ Invalid email or password", "error");
        console.log("Login failed");
    }
}
