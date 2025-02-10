const serverURL = "http://localhost:4000";

document.addEventListener("DOMContentLoaded", function () {
  fetch(serverURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const gridContainer = document.querySelector(".grid-container");
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add('blog-content');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Author:${post.author}</strong></p>
            <p>${post.post}</p>
            <button>View</button>
            <button>Edit</button>

        `;
        gridContainer.appendChild(postElement)
      });
    });
});
