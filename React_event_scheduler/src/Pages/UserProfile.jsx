import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:3001/api/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch profile');
        }

        setUser(data);
      } catch (err) {
        setError(err.message);
        if (err.message.includes('token') || err.message.includes('auth')) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="alert alert-error max-w-md">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold mb-6">User Profile</h2>

            {user && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                  <div>
                    <p className="text-sm text-base-content/60">User ID</p>
                    <p className="text-lg font-bold text-primary">#{user.id}</p>
                  </div>
                  <div
                    className={`badge badge-lg ${user.isActive ? 'badge-success' : 'badge-error'}`}
                  >
                    {user.isActive ? 'Active' : 'Inactive'}
                  </div>
                </div>

                <div className="divider"></div>

                <div className="space-y-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-base-content/60">
                      Email Address
                    </span>
                    <span className="text-lg font-medium">{user.email}</span>
                  </div>

                  {user.name && (
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-base-content/60">
                        Full Name
                      </span>
                      <span className="text-lg font-medium">{user.name}</span>
                    </div>
                  )}
                </div>

                <div className="divider"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-base-200 rounded-lg">
                    <p className="text-sm text-base-content/60 mb-1">
                      Account Created
                    </p>
                    <p className="text-sm font-medium">
                      {formatDate(user.createdAt)}
                    </p>
                  </div>

                  <div className="p-4 bg-base-200 rounded-lg">
                    <p className="text-sm text-base-content/60 mb-1">
                      Last Updated
                    </p>
                    <p className="text-sm font-medium">
                      {formatDate(user.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
