// resources/js/Pages/Home.tsx
import { Head } from "@inertiajs/react";
import React from "react";

// Import images
import Buddy from "../assets/buddy.jpg";
import Charlie from "../assets/charlie.jpeg";
import Whiskers from "../assets/whiskers.jpeg";

const pets = [
  { name: "Buddy", image: Buddy },
  { name: "Whiskers", image: Whiskers },
  { name: "Charlie", image: Charlie },
];

const Home: React.FC = () => {
  return (
    <>
      <Head title="Pet Show | Home" />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative bg-blue-500 text-white text-center py-20">
          <h1 className="text-5xl font-bold">Welcome to the Pet Show!</h1>
          <p className="mt-4 text-lg">Join us in celebrating the love for pets.</p>
        </div>

        {/* Featured Pets Section */}
        <div className="container mx-auto my-12 px-6">
          <h2 className="text-3xl font-bold text-center">Featured Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {pets.map((pet, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4">{pet.name}</h3>
                <p className="text-gray-600">A wonderful pet looking for a home!</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-200 py-12 text-center">
          <h2 className="text-3xl font-bold">About Our Show</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Our pet show is a celebration of all pets, big and small. Join us for an event full of fun, competitions, and adorable animals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
