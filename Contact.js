const form  = document.querySelector("form"); 
const thankYou= document.querySelector(".thanks");
const firstname = document.querySelector('input[name="FirstName"]');
const LastName = document.querySelector('input[name="LastName"]');
const EmailAddress = document.querySelector('input[name="Email"]');
const Question = document.querySelector('input[name="Question"]');

 let isformvalid = false;

 const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
    
const resetElm = (elm) =>{
    elm.classList.remove("Invalid");
    elm.nextElementSibling.classList.add("hidden");
}
const invalitedElm = (elm) =>{
    elm.classList.add("Invalid");
    elm.nextElementSibling.classList.remove("hidden");
};
const validateInputs = () =>{
    isformvalid = true;
    resetElm(firstname);
    resetElm(LastName);
    resetElm(EmailAddress);
    resetElm(Question);
    if(!firstname.value){
         isformvalid = false;
         invalitedElm(firstname);
        
    }
    if(!LastName.value){
        isformvalid = false;
        invalitedElm(LastName);
       
   }
   if(!isValidEmail(EmailAddress.value)){
    isformvalid = false;
    invalitedElm(EmailAddress);
   
}

if(!Question.value){
    isformvalid = false;
    invalitedElm(Question);
   
}

};


form.addEventListener("submit",(e) => {
    e.preventDefault();
    validateInputs();
    if(isformvalid){
     form.remove();
      thankYou.classList.remove("hidden");
    }
   
});
firstname.addEventListener("input",()=>{
    validateInputs();
});
LastName.addEventListener("input",()=>{
    validateInputs();
});
EmailAddress.addEventListener("input",()=>{
    validateInputs();
});
Question.addEventListener("input",()=>{
    validateInputs();
});



