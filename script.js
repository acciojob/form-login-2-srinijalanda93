const formEleObj=document.querySelector("form");
formEleObj.addEventListener("submit",(eventobj)=>{
	 const data={
		 FirstName:formEleObj.First Name.value,
		 LastName:formEleObj.Last Name.value,
		 PhoneNumber:formEleObj.Phone Number.value,
		 EmailID:formEleObj.Email ID.value
    };
   // console.log(data);
	alert(
        "First Name: " + data.FirstName +
        "\nLast Name: " + data.LastName +
        "\nPhone Number: " + data.PhoneNumber +
        "\nEmail ID: " + data.EmailID
    );

})
