### Dev

```
npm install
npm run build:browser

```

install and use in browser



### Usage

Check examples

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="./fingerprint.js"></script>
    <title>Browser example</title>
  </head>
  <body>
    <div id="root"></div>

    <script>
      var uniqueId;
      var fingerprint = new Fingerprint();
      // options = {
      //   COOKIE_NAME: "__fingerprint",
      //   COOKIE_EXPIRE_TIME: 12,
      //   // Fingerprint options check https://github.com/Valve/fingerprintjs2
      //   fpParams: {
      //     fonts: { extendedJsFonts: false }
      //   }
      // };

      fingerprint.generate(function(id) {
        console.log(id);
        uniqueId = id;

        document.getElementById("root").innerHTML =
          " This is a browser example where and api is called to generate first fingerprint " +
          uniqueId;
      });
    </script>
  </body>
</html>
```