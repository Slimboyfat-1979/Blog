import express, { response } from 'express';
import path from 'path';
import { fileURLToPath} from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

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

app.post("/submit", async (req, res) => {
    const blogPost = {
        title: req.body.title,
        author: req.body.author,
        post: req.body.post
    }

    const {data, error} = await supabase.from('posts').insert([blogPost]);

    if(error) {
        console.error('Error inserting data', error);
        res.status(500).send('An error occured while submitting the post');
    }else{
        // res.send("Blog post submitted succesfully!")
        res.redirect("/")
    }
})

