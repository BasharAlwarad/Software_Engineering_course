import React from 'react';
import { Link } from 'react-router';

const Destinations = () => {
  const countries = [
    {
      id: 1,
      slug: 'japan',
      name: 'Japan',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      details:
        'A country of islands in East Asia, known for its rich culture, cherry blossoms, and advanced technology.',
    },
    {
      id: 2,
      slug: 'france',
      name: 'France',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      details:
        'Famous for its cuisine, art, and the Eiffel Tower, France is a top travel destination in Europe.',
    },
    {
      id: 3,
      slug: 'brazil',
      name: 'Brazil',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      details:
        'Known for its vibrant culture, Amazon rainforest, and the iconic Christ the Redeemer statue.',
    },
    {
      id: 4,
      slug: 'italy',
      name: 'Italy',
      image:
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
      details:
        'Home to ancient ruins, world-class art, and delicious cuisine, Italy is a must-visit in Europe.',
    },
    {
      id: 5,
      slug: 'australia',
      name: 'Australia',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
      details:
        'Famous for its natural wonders, beaches, and the Great Barrier Reef.',
    },
    {
      id: 6,
      slug: 'egypt',
      name: 'Egypt',
      image:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      details:
        'Land of the Pharaohs, pyramids, and the Nile River, Egypt is rich in history.',
    },
    {
      id: 7,
      slug: 'canada',
      name: 'Canada',
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      details:
        'Known for its vast landscapes, multicultural cities, and natural beauty.',
    },
    {
      id: 8,
      slug: 'thailand',
      name: 'Thailand',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      details:
        'Famous for its tropical beaches, ornate temples, and vibrant street life.',
    },
    {
      id: 9,
      slug: 'greece',
      name: 'Greece',
      image:
        'https://images.unsplash.com/photo-1504609813440-554e64a8f005?auto=format&fit=crop&w=800&q=80',
      details:
        'Known for its ancient history, beautiful islands, and Mediterranean cuisine.',
    },
    {
      id: 10,
      slug: 'south-africa',
      name: 'South Africa',
      image:
        'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=800&q=80',
      details:
        'A diverse country with stunning landscapes, wildlife, and vibrant cities.',
    },
  ];

  return (
    <div>
      {countries?.map((country) => (
        <div key={country.id}>
          <Link to={`/${country.id}`}>
            {/* <Link to={"/"}> */}
            <img src={`${country.image}`} width={100} height={100} />
          </Link>
          <h1>{country.name} </h1>
          <p>{country.details} </p>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
