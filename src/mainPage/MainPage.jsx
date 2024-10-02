import React, { useEffect, useState } from "react";

function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchTrackData = async () => {
            setIsLoading(true);
            const url = 'https://restcountries.com/v3.1/all';
        
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log(result);
                setCountries(json.result);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTrackData();
    }, []);
    

    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Country Explorer</h1>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-gray-700 hover:text-blue-500 transition">Home</li>
              <li className="text-gray-700 hover:text-blue-500 transition">Countries</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm5sd2V1anIxY3VhNWplampxMXd4b2g4bjRsMGZtNjRweXBwN3djOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zRdobfLq13t8BuL72/giphy.webp)' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center">
            Explore the Countries of the World
          </h2>
        </div>
      </section>

      {/* Countries Section */}
      {isLoading ? (<div className="flex justify-center text-5xl text-black items-center">Loading...</div>) : (
          <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Featured Countries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {countries.length > 0 ? (
                    countries.map((country, index) => {
                      return (
                          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                              <img src="" alt="France" className="w-full h-48 object-cover rounded-md mb-4" />
                              <h4 className="text-xl font-bold text-gray-800">{country.name}</h4>
                              <p className="text-gray-600 mt-2">Known for its art, fashion, and culture, France is one of the most popular tourist destinations in the world.</p>
                          </div>
                      )
                    })
                  ) : (
                    <p>Sorry, something went wrong</p>
                  )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 World Explorer. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    );
}

export default MainPage;