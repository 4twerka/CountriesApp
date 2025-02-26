import React, { useEffect, useState } from "react";

function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [searchCountries, setSearchCountries] = useState([]);

    const HandleInputValue = (e) => {
      const value = e.target.value;
      setInputValue(value);

      const searchResult = countries.filter((country) => {
        return country.name.common.toLowerCase().startsWith(value.toLowerCase());
      });

      setSearchCountries(searchResult);
    }

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
    
    const scrollToCountries = () => {
      document.getElementById("country-section").scrollIntoView({ behavior: "smooth" });
    };
    
    const commonCountries = !inputValue ? countries : searchCountries;
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Country Explorer</h1>
          <nav>
            {isMobile ? (
              <button className="text-3xl" onClick={HandleToggle}>☰</button>
            ) : (
              <ul className="flex space-x-6">
                <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer" onClick={scrollToCountries}>Countries</li>
                <a className="text-gray-700 hover:text-blue-500 transition cursor-pointer" href="https://github.com/4twerka">My Github</a>
              </ul>
            )}
          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/99/f9/5e/99f95ee41c3def28268cc3877f103daf.gif)' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center">
            Explore the Countries of the World
          </h2>
        </div>
      </section>

      {isLoading ? (<div className="flex justify-center text-5xl text-black items-center">Loading...</div>) : (
          <section id="country-section" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Featured Countries</h3>
            <div className="flex justify-center items-center">
              <input type="text" className="pl-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full sm:w-96" placeholder="Search country" value={inputValue} onChange={HandleInputValue}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {commonCountries.length > 0 ? (
                    commonCountries.map((country, index) => {
                      return (
                          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                              <a href={country.maps.googleMaps}>
                              <img src={country.flags.png} alt={country.name.common} className="w-full h-48 object-cover rounded-md mb-4" />
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

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 World Explorer. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    );
}

export default MainPage;