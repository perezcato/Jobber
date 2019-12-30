import React from 'react';

export const JobTags = () => {
    return (<div className="w-full border rounded px-2 mb-1 py-2">
        <h4 className="text-xs font-extrabold text-gray-800">Job Tags</h4>
        <hr/>
        <div className="tags py-1">
            <button className="bg-blue-600 px-2 py-1 rounded-lg text-gray-100 text-xs font-bold focus:outline-none">
                php
            </button>
            <button className="bg-blue-600 ml-1 px-2 py-1 rounded-lg text-gray-100 text-xs font-bold focus:outline-none">
                javascript
            </button>
            <button className="bg-blue-600 px-2 ml-1 py-1 rounded-lg text-gray-100 text-xs font-bold focus:outline-none">
                java
            </button>
            <button className="bg-blue-600 px-2 ml-1 py-1 rounded-lg text-gray-100 text-xs font-bold focus:outline-none">
                c++
            </button>
            <button className="bg-blue-600 px-2 py-1 rounded-lg text-gray-100 text-xs font-bold focus:outline-none">
                python
            </button>
        </div>

    </div>)
}
