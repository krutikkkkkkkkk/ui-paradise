function icons() {
    fetch('json/icons.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i < data.length; i++){
        let name = data[i].name;
        let url = data[i].url;
        let description = data[i].description;
        console.log(name)

        document.getElementById('icons').innerHTML += `
        <div class="col" style="display:flex;justify-content: center;">
        <div class="card" style="width:15rem; height:16rem; margin-bottom:1.5rem; justify-content:space-evenly;">
          <div class="card-body">
            <h5 class="card-title" style="font-weight:bold">${name}</h5>
            <p>${description}</p>
            <a href="${url}" class="btn btn-primary" style="background-color: #7e6eed">Visit Site</a>
          </div>
        </div>
            </div>
        `
        }
       
    })
    .catch(err => console.log(err))
}

function colors() {
    fetch('json/icons.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i < data.length; i++){
        let name = data[i].name;
        let url = data[i].url;
        let description = data[i].description;
        console.log(name)

        document.getElementById('colors').innerHTML += `
        <div class="col" style="display:flex;justify-content: center;">
        <div class="card" style="width:15rem; height:16rem; margin-bottom:1.5rem; justify-content:space-evenly;">
          <div class="card-body">
            <h5 class="card-title" style="font-weight:bold">${name}</h5>
            <p>${description}</p>
            <a href="${url}" class="btn btn-primary" style="background-color: #7e6eed">Visit Site</a>
          </div>
        </div>
            </div>
        `
        }
       
    })
    .catch(err => console.log(err))
}
icons()
colors()