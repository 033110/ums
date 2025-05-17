async function getDetails() {
  try {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    const { data } = await axios.get(
      `https://node-react-10.onrender.com/users/${userId}`
    );
    console.log(data);
    
    
    document.querySelector(".user-email-edit").value = data.user.email;
    document.querySelector(".user-phone-edit").value = data.user.phone;
    console.log(data.user.phone)
  } catch (e) {
    alert("Something went wrong, please try again later.");
  }
}
getDetails();

const updateUserName = document.querySelector(".update-userName");
window.onload = function () {
  const updateUserName = document.querySelector(".edit-form");
  updateUserName.onsubmit = async function (u) {
    u.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const user = {
      userName: u.target.userName.value
    };

     
       Swal.fire({
        
         title: "Do you want to save the changes?",
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: "Save",
         denyButtonText: `Don't save`,
       }).then(async(result) => {
        try {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            const response = await axios.put(`https://node-react-10.onrender.com/users/${userId}`,user);
            window.location.href="./index.html";
           Swal.fire("Saved!", "", "success");
         } else if (result.isDenied) {
           Swal.fire("Changes are not saved", "", "info");
         }
       }catch(e){
        alert("Something went wrong, please try again later.");

    }});
       

       
     
}  
}