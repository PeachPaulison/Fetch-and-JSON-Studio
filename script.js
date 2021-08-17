// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            index = 0;
            container = document.getElementById("container");
            html = ``;

            while (index < json.length) {
                html += `<div class="astronaut">
                            <div class="bio">
                                <h3>${json[index].firstName} ${json[index].lastName}</h3>
                                    <ul>                            
                                        <li>Hours in Space: ${json[index].hoursInSpace}</li>
                                        <li>Active ${json[index].active}</li>
                                        <li>Skills ${json[index].skills}</li>
                                    </ul>
                            </div>
                          <img class="avatar" src="${json[index].picture}">
                        </div>`
                            
                     
                index++;
            }   
            container.innerHTML = html;
        })
    })
})