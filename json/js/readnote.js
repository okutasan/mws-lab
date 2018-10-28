var URL="data/data.txt";

fetch(URL)
    .then(function(response){
        if (response.status !==200){
            console.log('Ada masalah. Status code'+response.status);
            return;
        }
        return response.text()
    })
    .then( text => console.log(text))
    .catch(err => console.log(err));