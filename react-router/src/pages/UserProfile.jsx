import React from 'react';
import { useParams, Link } from 'react-router-dom';

function UserProfile() {
  // The useParams hook reads the 'username' from the URL
  const { username } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-slate-800">
        Profile for: <span className="text-indigo-600">{username}</span>
      </h1>
      <p className="mt-4 text-lg text-slate-600">This is the profile page for the user above.</p>
      <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  );
}

export default UserProfile;