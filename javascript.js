

function fetchPhoto() {
    fetch("https://api.pexels.com/v1/search?query=parrot", {
        headers: {
            Authorization: "Umss3iXAXHOU5tCD5D5URD4ZBCiduedFQxIctuuU8YpIt6rPl50WzS4p"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.photos)
           // let title = document.getElementById("pappagalli")
            let id = document.getElementById("parrot")
            console.log(id)
            //title.classList.remove("d-none")
            let img = data.photos;
            img.forEach(element => {
                let image = element;
                id.innerHTML += `<div class='col col-1-xl col-4 mb-1'> <img class='img-fluid ' src='${image.src.tiny}'/> </div>`
            });
        })
        .catch(error => {
            // Gestisci gli errori
            console.error(error);
        });

}

fetchPhoto()

