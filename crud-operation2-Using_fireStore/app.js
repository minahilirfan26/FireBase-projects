 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
 import { getFirestore, collection, addDoc, doc, setDoc, getDoc, updateDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyC2S7d2KXtH_DmRrodnrO4MI2P7nXtBcrY",
   authDomain: "practice-proj-f93e2.firebaseapp.com",
   projectId: "practice-proj-f93e2",
   storageBucket: "practice-proj-f93e2.appspot.com",
   messagingSenderId: "308360808375",
   appId: "1:308360808375:web:708e53b0d20397d1520a32"
 };


 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

/**
   let name = document.getElementById("name")
    let fatherName = document.getElementById("fname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let number = document.getElementById("number");
    let rollNum = document.getElementById("rollno");
 */

    let name = document.getElementById("name")
    let fatherName = document.getElementById("fname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let number = document.getElementById("number");
    let rollNum = document.getElementById("rollno");

    //btns

    let createBtn = document.getElementById("create");
    let updateBtn = document.getElementById("update");
    let getBtn = document.getElementById("get");
    let deleteBtn = document.getElementById("delete");
   
    async function addData(){
        try {
            const docRef = await addDoc(collection(db, "users"), {
             name: name.value,
             fatherName: fatherName.value,
             email: email.value,
             password : password.value,
             number: number.value,
             rollNum: rollNum.value
            });
            console.log("Document written with ID: ", docRef.id);
            alert("data added sucessfully")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    createBtn.addEventListener("click", addData);

    async function addDataCustomID(){
        await setDoc(doc(db, "cities", rollNum.value), {
            name: name.value,
             fatherName: fatherName.value,
             email: email.value,
             password : password.value,
             number: number.value,
             rollNum: rollNum.value
          });
     document.getElementById("name").value = "";
     document.getElementById("fname").value = "";
     document.getElementById("email").value = "";
     document.getElementById("password").value = "";
     document.getElementById("number").value = "";
     document.getElementById("rollno").value = "";
    }
    createBtn.addEventListener("click", addDataCustomID);


    ///Read data
    async function getData(){
        const docRef = doc(db, "cities", rollNum.value);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            name.value = docSnap.data().name;
            fatherName.value = docSnap.data().fatherName;
            email.value = docSnap.data().email;
            password.value = docSnap.data().password;
            number.value = docSnap.data().number

          console.log("Document data:", docSnap.data());
        } else {
          
          console.log("No such document!");
        }
    }
    getBtn.addEventListener("click", getData)



    ///upadate data

    async function updateData(){
      try{
        const washingtonRef = doc(db, "cities", rollNum.value);
        await updateDoc(washingtonRef, {
            name: name.value,
            fatherName: fatherName.value,
            email: email.value,
            password : password.value,
            number: number.value
        });
        alert("upadted")
        document.getElementById("name").value = "";
     document.getElementById("fname").value = "";
     document.getElementById("email").value = "";
     document.getElementById("password").value = "";
     document.getElementById("number").value = "";
     document.getElementById("rollno").value = "";
      } catch(err){
        console.log("error---->", err)
      }
    }
    updateBtn.addEventListener("click", updateData)


    //deleted data
    async function deleteData(){
        try{
        const cityRef = doc(db, 'cities', rollNum.value);
        await updateDoc(cityRef, {
            name: deleteField(),
            fatherName: deleteField(),
            email: deleteField(),
            password : deleteField(),
            number: deleteField(),
            rollNum: deleteField()
        });
        alert("deletd")
        document.getElementById("name").value = "";
     document.getElementById("fname").value = "";
     document.getElementById("email").value = "";
     document.getElementById("password").value = "";
     document.getElementById("number").value = "";
     document.getElementById("rollno").value = "";
    } catch(err){
        console.log("errr>>>>>>>", err)
    }
    
    }
    deleteBtn.addEventListener("click", deleteData)