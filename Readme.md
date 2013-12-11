# request-log-middleware

    A request logger middleware.

## Example

```js
var requestLog = require('request-log');
var slowLog = require('request-slow-log');
var logger = new require('winston').Logger();

var app = express();

app.configure('production', function () {
  app.use(requestLog(logger))
  app.use(slowLog(logger));
});
```

## API

### requestLog(logger)

    Return a request logger middleware.

