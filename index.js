import express, { response } from 'express';
import path from 'path';
import { fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static("public"))

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
})

app.get("/view/:id", (req, res) => {
    const id = req.params.id;
    res.sendFile(path.join(__dirname, 'public', 'view.html'))
    // fetch(`http://localhost:4000/${id}`).then(response => response.json()).then(data => {
    //     console.log(data);
    // });

})

