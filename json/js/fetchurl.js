fetch('data/data.json')
    .then (response => {
        console.log(response.headers.get('Content-Type'));
            console.log(response.headers.get('Date'));
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.type);
            console.log(response.url);
    });