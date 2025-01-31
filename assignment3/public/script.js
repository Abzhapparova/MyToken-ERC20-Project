const blogForm = document.getElementById('blogForm');
const blogsDiv = document.getElementById('blogs');

const fetchBlogs = async () => {
  const res = await fetch('/blogs');
  const { data: blogs } = await res.json();
  blogsDiv.innerHTML = blogs.map(blog => `
    <div>
      <h3>${blog.title}</h3>
      <p>${blog.body}</p>
      <small>Author: ${blog.author}</small>
      <button onclick="editBlog('${blog._id}')">Edit</button>
      <button onclick="deleteBlog('${blog._id}')">Delete</button>
    </div>
  `).join('');
};

blogForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const author = document.getElementById('author').value;

  await fetch('/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body, author }),
  });

  blogForm.reset();
  fetchBlogs();
});

const editBlog = async (id) => {
  const newTitle = prompt('Enter new title:');
  const newBody = prompt('Enter new body:');

  await fetch(`/blogs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: newTitle, body: newBody }),
  });

  fetchBlogs();
};

const deleteBlog = async (id) => {
  await fetch(`/blogs/${id}`, {
    method: 'DELETE',
  });

  fetchBlogs();
};

fetchBlogs();