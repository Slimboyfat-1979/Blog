import express from 'express'

const app = express();

app.listen(4000, () => {
    console.log("Listening on port 4000")
})

app.get("/", (req, res) => {
    res.json(blog);
})

const blog = [
    {
      "id": 1,
      "title": "The Art of Minimalism",
      "author": "Jane Doe",
      "post": "Minimalism is not about having less, but about making room for more of what matters. It encourages intentional living and focusing on the essentials."
    },
    {
      "id": 2,
      "title": "Exploring the World on a Budget",
      "author": "John Smith",
      "post": "Traveling doesn't have to break the bank. With careful planning and a few smart tips, you can explore amazing destinations without spending a fortune."
    },
    {
      "id": 3,
      "title": "The Benefits of Mindfulness",
      "author": "Emily Davis",
      "post": "Mindfulness helps us stay present and reduces stress. By practicing mindfulness, we can improve our overall well-being and find peace in our daily lives."
    },
    {
      "id": 4,
      "title": "Mastering the Art of Cooking",
      "author": "Michael Brown",
      "post": "Cooking is a valuable skill that brings joy and creativity to our lives. With practice and patience, anyone can become a master chef in their own kitchen."
    }
  ]
  