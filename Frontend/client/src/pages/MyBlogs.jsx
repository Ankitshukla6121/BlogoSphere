import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function MyBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await axios.get(`/api/posts/user/${user?.id}`); // Replace with your API endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchMyPosts();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center">My Blogs</h1>
      {posts.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>You haven't written any blogs yet.</p>
          <Link
            to="/createpost"
            className="block mt-4 font-semibold text-blue-500 hover:underline"
          >
            Create your first blog
          </Link>
        </div>
      ) : (
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              )}
              <div className="p-4">
                <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
                <p className="mb-4 text-sm text-gray-700">
                  {post.content.substring(0, 100)}...
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to={`/post/${post._id}`}
                    className="font-semibold text-blue-500 hover:underline"
                  >
                    Read More
                  </Link>
                  <div className="flex space-x-4">
                    <Link
                      to={`/editpost/${post._id}`}
                      className="font-semibold text-yellow-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={async () => {
                        try {
                          await axios.delete(`/api/posts/${post._id}`); // Replace with your API endpoint
                          setPosts((prevPosts) =>
                            prevPosts.filter((p) => p._id !== post._id)
                          );
                        } catch (error) {
                          console.error('Error deleting post:', error);
                        }
                      }}
                      className="font-semibold text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBlog;
