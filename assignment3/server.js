const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Blog = require('./models/Blog');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const dbURI = 'mongodb+srv://my_user:123olx123@cluster0.glibh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/blogs', async (req, res) => {
  try {
    const { title, body, author } = req.body;
    if (!title || !body) {
      return res.status(400).json({ message: 'Title and body are required.' });
    }
    const blog = new Blog({ title, body, author });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', data: blog });
  } catch (err) {
    res.status(500).json({ message: 'Error creating blog post', error: err.message });
  }
});

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ message: 'Blogs fetched successfully', data: blogs });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blogs', error: err.message });
  }
});

app.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog fetched successfully', data: blog });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blog', error: err.message });
  }
});

app.put('/blogs/:id', async (req, res) => {
  try {
    const { title, body, author } = req.body;
    if (!title && !body) {
      return res.status(400).json({ message: 'At least one field (title or body) is required for update.' });
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog updated successfully', data: blog });
  } catch (err) {
    res.status(500).json({ message: 'Error updating blog', error: err.message });
  }
});

app.delete('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting blog', error: err.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
