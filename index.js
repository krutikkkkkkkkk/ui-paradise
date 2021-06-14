var d = new Date();
window.onload = function(){
    let year = d.getFullYear();
    document.getElementById('year').innerHTML = year;
}


function sendMessage(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let chat_id = "1171876903"
    let apiToken= "1895204987:AAGP6W_mnk0Jz5uFEoLMVo2Az2aGsVVvA-Y";
    let time = `${d.getHours()}:${d.getMinutes()} IST`

    let text = `Name : ${name}
    \nEmail: ${email}
    \nMessage: ${message}
    \nTime: ${time}
    `;

    let url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=Markdown`

    fetch(url)
    .then(
        () => {
            document.getElementById('modal-body').innerHTML = "<h4>Your response was submitted!</h4>"
            document.getElementById('modal-footer').innerHTML ="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>"
        }
    )
    .catch(err => {
            document.getElementById('modal-body').innerHTML = err;
            document.getElementById('modal-footer').innerHTML ="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>"
    })
}