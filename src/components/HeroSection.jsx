import React, { useState } from 'react';

export default function HeroSection({ setSearchQuery }) {
    const [localSearchQuery, setLocalSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setLocalSearchQuery(e.target.value);
        setSearchQuery(e.target.value);
        console.log("HeroSection:", e.target.value);

    };

    return (
        <div className="bg-base-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8">Our Menu </h1>
                <div className="max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search in our Menu..."
                        className="input input-bordered w-full"
                        value={localSearchQuery} // using the local status
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
        </div>
    );
}