import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function PostDetails() {
  const { id } = useParams(); // Post ID from the route parameters
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`); // Replace with your API endpoint
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching the post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`); // Replace with your API endpoint
      navigate('/'); // Redirect to the homepage after deletion
    } catch (error) {
      console.error('Error deleting the post:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-bold text-red-500">Post not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-64"
          />
        )}
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
          <p className="mb-4 text-sm text-gray-500">
            Written by <span className="font-semibold">{post.authorName}</span>{' '}
            on {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            {post.content}
          </p>

          {user && user.id === post.authorId && (
            <div className="flex space-x-4">
              <Link
                to={`/editpost/${id}`}
                className="px-4 py-2 text-white transition bg-yellow-500 rounded-lg hover:bg-yellow-600"
              >
                Edit Post
              </Link>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
              >
                Delete Post
              </button>
            </div>
          )}

          <div className="mt-8">
            <Link
              to="/"
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
