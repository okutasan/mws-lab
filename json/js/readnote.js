var URL="data/data.txt";

fetch(URL)
    .then(function(response){
        if (response.status !==200){ //http status
            console.log('Ada masalah. Status code'+response.status);
            // return;
            throw response.statusText;
        }
        return response.text()
    })
    .then( text => {
        let t=document.getElementById('hasil');
        t.textContent=text;
    })
    .catch(err => console.log(err));