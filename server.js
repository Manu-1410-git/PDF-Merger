const express = require('express');
const path = require('path');
const multer = require('multer');
const { mergePdfs } = require('./merge');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.post('/merge', upload.array('pdfs', 3),  async (req, res) => {
    console.log(req.files);
    await mergePdfs(
    path.join(__dirname, 'uploads', req.files[0].filename),
    path.join(__dirname, 'uploads', req.files[1].filename),
    path.join(__dirname, 'uploads', req.files[2].filename)
);
    res.redirect('http://localhost:3000/static/merged.pdf');

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});