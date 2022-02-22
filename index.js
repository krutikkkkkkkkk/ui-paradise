var d = new Date();
window.onload = function(){
    let year = d.getFullYear();
    document.getElementById('year').innerHTML = year;
}

// function submitAnotherResponse(){
//     document.getElementById('modal-body').innerHTML = `<label for="name">Name</label>
//     <input type="text" id="name" class="form-control" >
//     <label for="Email">Email</label>
//     <input type="email" id="email" class="form-control">
//     <label for="message">Message</label>
//     <textarea class="form-control" name="message" id="message" cols="10" rows="8"></textarea>`

//     document.getElementById('modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//     <button onclick="sendMessage()" type="button" class="btn btn-primary" style="background-color: #7e6eed; border-color: #7e6eed;">Send Message</button>
//   `
// }


// let url = document.URL;

// console.log(url)



// function sendMessage(){
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let message = document.getElementById('message').value;

//     let chat_id = "1171876903"
//     let apiToken= "1895204987:AAGP6W_mnk0Jz5uFEoLMVo2Az2aGsVVvA-Y";
//     let time = `${d.getHours()}:${d.getMinutes()} IST`

//     let text = `Name : ${name}
//     \nEmail: ${email}
//     \nMessage: ${message}
//     \nTime: ${time}
//     `;

//     let url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=Markdown`

//     fetch(url)
//     .then(
//         () => {
//             document.getElementById('modal-body').innerHTML = "<h4>Your response was submitted!</h4>"
//             document.getElementById('modal-footer').innerHTML =" <button onclick='submitAnotherResponse()' type='button' class='btn btn-primary' style='background-color: #7e6eed; border-color: #7e6eed;'>Submit Another Response</button> <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>"
//         }
//     )
//     .catch(err => {
//             document.getElementById('modal-body').innerHTML = err;
//             document.getElementById('modal-footer').innerHTML ="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>"
//     })
// }


let title = document.getElementById('title');

function randomTitle() {
    let titles = ["xxxx","Clarify the Problem..!","Be Consistent..!","Be Creative..!","Goal for a WOW Design..!", "Love Your User..!","Be Competitive..!","Don’t Make Personal Opinions..!","Make Things Simple..!","Make Understandable Design..!","Focus on Ease of Use..!"]
    let randNum = Math.floor((Math.random() * 10) + 1);

    title.innerHTML = titles[randNum];
}
randomTitle()
