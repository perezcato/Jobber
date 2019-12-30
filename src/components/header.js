import React from 'react';

export const HomeComponent = () => {
    return (
        <header className="w-full flex items-center justify-between border-t-4 border-blue-800 bg-blue-600 px-64 py-2">
            <div className="font-bold text-xl text-gray-100 tracking-wide">
                <a href="/">Jobber</a>
            </div>
            <nav className="text-gray-100 ">
                <button className="text-xs font-bold  border-r border-dotted border-gray-500 pr-3 focus:outline-none">All Jobs</button>
                <button className="text-xs font-bold pl-3 focus:outline-none">All Jobs</button>
            </nav>
        </header>
    )
};
