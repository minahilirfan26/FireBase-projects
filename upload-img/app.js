 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
 import { getStorage, ref, uploadBytes,uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBQUeSU_-vwaXfVGHCi72RuvdaHTqtag84",
   authDomain: "minahil-smit.firebaseapp.com",
   projectId: "minahil-smit",
   storageBucket: "minahil-smit.appspot.com",
   messagingSenderId: "99986439958",
   appId: "1:99986439958:web:474216885b10f5f82a9a37"
 };

 
 const app = initializeApp(firebaseConfig);
 const storage = getStorage();

let upload = document.getElementById("upload");

const uploadFile = (file)=>{
    return new Promise((resolve, reject) => {
        const mountainsRef = ref(storage, 'images/${file.name}');

    const uploadTask = uploadBytesResumable(mountainsRef, file);
         uploadTask.on('state_changed', 
      (snapshot) => {
       
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        reject(error)
      }, 
      () => {
       
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           resolve(downloadURL);
        });
      }
    );
    })
  }
upload.addEventListener("click", async()=>{
    try{
        let file = document.getElementById("file");
   uploadFile(file.files[0])
   const res = await uploadFile(file.files[0])
   console.log("res--->", res)
   let img = document.getElementById("img");
   img.src = res
    } catch(error){
        console.log("eror---->", error)
    }
     
  });


 let deleteFile = ()=>{
    let deleteBtn = document.getElementById("delete")
    deleteBtn.addEventListener("click", ()=>{
        // Create a reference to the file to delete
const desertRef = ref(storage, 'images');

// Delete the file
deleteObject(desertRef).then((res) => {
  console.log("res--->", res)
}).catch((error) => {
 console.log(error)
});
    })
 }