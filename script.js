const formEleObj=document.querySelector("form");
formEleObj.addEventListener("submit",(eventobj)=>{
	 const data={
		 FirstName:formEleObj.FirstName.value,
		 LastName:formEleObj.LastName.value,
		 PhoneNumber:formEleObj.PhoneNumber.value,
		 EmailID:formEleObj.EmailID.value
    };
   // console.log(data);
	alert(
        "First Name: " + data.FirstName +
        "\nLast Name: " + data.LastName +
        "\nPhone Number: " + data.PhoneNumber +
        "\nEmail ID: " + data.EmailID
    );

})
