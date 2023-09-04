
  let rollV,nameV,adressV;

  function readForm() {
    rollV = document.getElementById("rollno").value;
    nameV = document.getElementById("name").value;
    adressV = document.getElementById("adress").value;
    console.log(nameV,rollV,adressV);
  }
  document.getElementById("create").onclick = function(){
    readForm();

    firebase.database().ref("students/"+ rollV)
    .set(
        {
            rollNo: rollV,
            name: nameV,
            adress: adressV
        }
    );
    alert("data created")
     document.getElementById("rollno").value = "";
     document.getElementById("name").value = "";
     document.getElementById("adress").value = "";
  }

  document.getElementById("read").onclick = function () {
    readForm();

    firebase.database().ref("students/"+ rollV)
    .on("value", function(snap) {
        document.getElementById("rollno").value = snap.val().rollNo;
        document.getElementById("name").value = snap.val().name;
        document.getElementById("adress").value = snap.val().adress;
    }
    );

  }


  document.getElementById("update").onclick = function(){
    readForm();

    firebase.database().ref("students/"+ rollV)
    .update(
        {
            rollNo: rollV,
            name: nameV,
            adress: adressV
        }
    );
    alert("data updated")
     document.getElementById("rollno").value = "";
     document.getElementById("name").value = "";
     document.getElementById("adress").value = "";
  }

  document.getElementById("delete").onclick = function(){
    readForm();

    firebase.database().ref("students/"+ rollV)
    .remove();
    alert("data deleted")
     document.getElementById("rollno").value = "";
     document.getElementById("name").value = "";
     document.getElementById("adress").value = "";
  }