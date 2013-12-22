# request-log-middleware

    Log an [express](https://github.com/visionmedia/express) request.

## Example

```js
var requestLog = require('request-log-middleware');
var logger = new require('winston').Logger();

var app = express();

app.configure('production', function () {
  app.use(requestLog(logger));
});
```

## API

### requestLog(logger)

    Return a request logger middleware.


## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

