import React, { useEffect, useState } from "react";

function MainPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrackData = async () => {
            setIsLoading(true);
            const url = 'https://restcountries.com/v3.1/all';
        
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTrackData();
    }, []);
    

    return (
        <div className="bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 bg-gray-800">
          <div className="text-2xl font-bold">MusicPlatform</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#playlists" className="hover:text-yellow-400">Playlists</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
  
        {/* Main banner */}
        <section id="home" className="h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Stream Your Favorite Music</h1>
            <p className="text-xl mb-8">Listen to millions of tracks, anywhere and anytime</p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500">
              Get Started
            </button>
          </div>
        </section>
  
        {/* Playlists */}
        <section id="playlists" className="py-16 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Playlists</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Playlist */}
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <img src="" alt="Top Hits" className="h-48 w-full object-cover mb-4 rounded" />
                <h3 className="text-2xl font-semibold mb-2">Top Hits</h3>
                <p className="text-gray-400">The most popular songs right now</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 py-6">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">© 2024 MusicPlatform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
}

export default MainPage;