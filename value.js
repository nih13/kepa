const axios = require('axios').default;
var generator = require('generate-password');



console.log(password);

const keypair = () => {
    return axios.get('/user', {
        params: {
            NAME: "Niharika"
        }
    }).then(function (response) {
        var password = generator.generate({
            length: 10,
            numbers: true
        });
        return res.json(response)
    })
}


module.exports = keypair;