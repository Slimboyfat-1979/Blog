import express, { response } from 'express';
import path from 'path';
import { fileURLToPath} from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// dotenv.config();

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
})

app.get("/addpost", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'addpost.html'))
})

