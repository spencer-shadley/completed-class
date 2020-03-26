# Setup an HTTPS Server

The below steps walk you through how to create an https server, you can use the code in activity 14 as a starting point

## Generate a Certificate

https requires a certificate, we can create one ourselves

1. Open a terminal in the root of your application

1. Create a key and certificate

   `openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365`

1. Decrypt the key

   `openssl rsa -in keytmp.pem -out key.pem`

## Read the files in Express

1. Require the `fs` module

   `const fs = require('fs');`

1. Read the key

   `const key = fs.readFileSync('./key.pem')`

1. Read the certificate

   `const cert = fs.readFileSync('./cert.pem')`

1. Create an https server

   ```js
   const httpsServer = https.createServer(
     {
       key,
       cert
     },
     app
   );
   ```

## Start the server

```js
httpsServer.listen(PORT, () => {
  console.log(`Listening on https://localhost:${PORT}`);
});
```

## Try it out!

- Navigate to https://localhost:3000/

- Our certificate was not signed by a certificate authority the browser trusts, ignore the warning and continue

- An https site loads!
