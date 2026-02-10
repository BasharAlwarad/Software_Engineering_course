import Nav from './components/Nav';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    hireable: true,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 234-5678',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    hireable: true,
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@email.com',
    phone: '(555) 345-6789',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    hireable: false,
  },
  {
    id: 4,
    name: 'Emily Chen',
    email: 'emily.chen@email.com',
    phone: '(555) 456-7890',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    hireable: true,
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@email.com',
    phone: '(555) 567-8901',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    hireable: false,
  },
  {
    id: 6,
    name: 'Lisa Martinez',
    email: 'lisa.martinez@email.com',
    phone: '(555) 678-9012',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    hireable: true,
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <MainSection users={users} />
      <Footer />
    </div>
  );
}

export default App;
