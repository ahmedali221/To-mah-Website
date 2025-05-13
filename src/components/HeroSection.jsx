import React, { useState } from 'react';

export default function HeroSection({ setSearchQuery, image }) {
    const [localSearchQuery, setLocalSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setLocalSearchQuery(e.target.value);
        setSearchQuery(e.target.value);
        console.log("HeroSection:", e.target.value);
    };

    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${image})`,
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <div className="text-center px-4 sm:px-6 lg:px-8 w-full max-w-3xl">
                <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Our Menu</h1>
                <input
                    type="text"
                    placeholder="Search in our Menu..."
                    className="input input-bordered w-full text-black bg-white"
                    value={localSearchQuery}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}
