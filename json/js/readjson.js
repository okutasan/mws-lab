var URL = "data/data.json";
fetch(URL)
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.judul);
        console.log(rsp.lokasi)
    })
    .catch((err) => console.log(err));

// var URL = "data/data.json";
// fetch(URL)
//     .then(function (response) {
//         if (response.status !== 200) { //HTTP Status
//             console.log('Ada masalah. Status Code: ' + response.status);
//             throw response.statusText;
//         }
//         return response.json()
//     })
//     .then(function (res) {
//         console.log(res.judul);
//         console.log(res.lokasi);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });