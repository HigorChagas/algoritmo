const promise = new Promise((resolve, reject) => {
    if(response.status === 200) {
        resolve(response.body);
    } else {
        const error = 'Error'
        reject(error);
    }
});

