import express from 'express';
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