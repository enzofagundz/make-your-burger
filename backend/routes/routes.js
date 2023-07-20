const BreadController = require('../controllers/api/BreadController');

app.get('/breads', (req, res) => BreadController.index(req, res));

app.get('/breads/:id?', (req, res) => BreadController.show(req, res));

app.post('/createBread', (req, res) => BreadController.store(req, res));

app.put('/updateBread', (req, res) => BreadController.update(req, res));

app.delete('/deleteBread/:id', (req, res) => BreadController.destroy(req, res));