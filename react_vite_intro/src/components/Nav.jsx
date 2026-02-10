export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Directory</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition">
            Home
          </button>
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition">
            Contact
          </button>
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition">
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
