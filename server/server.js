const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: 'a097fe731b9c4be48ab93d3d005a07d0',
        clientSecret: '84c88e882d624f25b842340bba1d25f0',
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            //get access token.
            refreshToken: data.body.refresh_token,
            // gets refresh token.
            expiresIn: data.body.expires_in
            // set time limit on access token.
        })
    }) .catch(() => {
        res.sendStatus(400)
    });
});

app.listen(3001)