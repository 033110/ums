async function getDetails()  {
    
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    
    const {data} = await axios.get(`https://node-react-10.onrender.com/users/${userId}`);
    console.log(data)
    html =`
    <tr>
        <td>${data.user._id}</td>
        <td>${data.user.userName}</td>
        <td>${data.user.email}</td>
        <td>${data.user.phone}</td>
    </tr>`;
    
    document.querySelector(".users-data").innerHTML = html;
}
getDetails();