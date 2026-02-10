export default function MainSection({ users }) {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Available Users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {user.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Phone:</span> {user.phone}
                </p>

                {user.hireable && (
                  <div className="bg-green-100 border border-green-400 rounded-lg p-3">
                    <p className="text-green-700 font-semibold text-center">
                      ✓ Available for Hire
                    </p>
                  </div>
                )}

                {!user.hireable && (
                  <div className="bg-red-100 border border-red-400 rounded-lg p-3">
                    <p className="text-red-700 font-semibold text-center">
                      ✗ Not Available
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
