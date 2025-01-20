import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditPost() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');

  useEffect(() => {
   
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        const { title, content, image } = response.data;
        setTitle(title);
        setContent(content);
        setExistingImage(image); 
      } catch (error) {
        console.error('Error fetching post:', error);
        alert('Failed to load post details.');
      }
    };

    fetchPost();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`/api/posts/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Post updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="mb-4 text-2xl font-bold text-center">Edit Post</h1>

        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter post title"
            required
          />
        </div>

       
        <div className="mb-4">
          <label htmlFor="content" className="block mb-1 text-sm font-medium">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            placeholder="Write your post content here"
            required
          ></textarea>
        </div>

        
        {existingImage && (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Current Image</label>
            <img
              src={existingImage}
              alt="Current post"
              className="object-cover w-full h-40 rounded-md"
            />
          </div>
        )}

        {/* Image Input */}
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1 text-sm font-medium">
            Upload New Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

      
        <button
          type="submit"
          className="w-full py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
