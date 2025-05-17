const addUserForm = document.querySelector(".create-form");
//console.log("addUserForm");
addUserForm.onsubmit = async function(e){
     
         e.preventDefault();
    const user = {
        userName:e.target.userName.value,
        email:e.target.email.value,
        password:e.target.password.value,
        phone:e.target.phone.value,
    }
    try{
        const response = await axios.post(`https://node-react-10.onrender.com/users`,user);
        window.location.href="./index.html";
    
    }catch(e){
        alert("Something went wrong, please try again later. Or the email already exists");

    }
   
}