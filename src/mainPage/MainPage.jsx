import React, { useEffect, useState } from "react";
import BurgerMenu from "../burgerMenu/BurgenMenu";

function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const HandleToggle = () => {
      setIsToggle(!isToggle);
    }

    useEffect(() => {
        const fetchTrackData = async () => {
            setIsLoading(true);
            const url = 'https://restcountries.com/v3.1/all';
        
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log(result);
                setCountries(result);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTrackData();
    }, []);

    useEffect(() => {
      const PhoneFunc = () => {
        setIsMobile(window.innerWidth <= 640);
      }
      PhoneFunc();

      window.addEventListener('resize', PhoneFunc);

      return () => window.removeEventListener('resize', PhoneFunc);
    }, []);
    

    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Country Explorer</h1>
          <nav>
            {isMobile ? (<ul className="flex space-x-6">
              <button className="text-3xl" onClick={HandleToggle}>☰</button>
            </ul>) : (<ul className="flex space-x-6">
              <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer" id="#">Home</li>
              <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer" id="#country">Countries</li>
              <a className="text-gray-700 hover:text-blue-500 transition cursor-pointer" href="https://github.com/4twerka">My Github</a>
            </ul>)}
          </nav>
        </div>
      </header>

      {isToggle ? (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <nav className="bg-white rounded-lg p-10 relative z-50">
          <button className="absolute top-2 right-0 text-red-700 px-4 py-2 rounded z-60" onClick={HandleToggle}>
          ❌
          </button>
          <ul className="flex flex-col space-y-8 text-center text-gray-800">
            <li>
              <a href="#" className="text-2xl hover:text-gray-500">Home</a>
            </li>
            <li>
              <a href="#country" className="text-2xl hover:text-gray-500">Countries</a>
            </li>
            <li>
              <a href="https://github.com/4twerka" className="text-2xl hover:text-gray-500">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    ) : (
      <div className="object-none"></div>
    )}

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
            <div className="flex justify-center items-center">
            <input type="text" className="pl-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full sm:w-96" placeholder="Search country" />

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" id="country">
                  {countries.length > 0 ? (
                    countries.map((country, index) => {
                      return (
                          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                              <a href={country.maps.googleMaps}>
                              <img src={country.flags.png} alt="France" className="w-full h-48 object-cover rounded-md mb-4" />
                              <h4 className="text-xl font-bold text-gray-800">{country.name.common}</h4>
                              <p className="text-gray-600 mt-2">{country.continents}</p>
                              </a>
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