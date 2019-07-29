const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser());
  // GET /settings
  app.get('/settings', (req, res) => {
    res.json([
      {
        matcher: 'sub',
        request: {
          delay: 0,
        },
        response: {
          delay: 500,
        }
      },
      {
        matcher: '$mail',
        request: {
          delay: 100,
        },
        response: {
          delay: 0,
          detail: {
            status: 200,
            body: {
              a: 1,
            },
          }
        }
      }
    ]);
  });

  // POST /settings
  app.post('/settings', (req, res) => {
    res.json(req.body);
  });
};
