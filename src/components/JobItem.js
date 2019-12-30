import React from 'react';

export const JobItem = ({data}) => {
    return (
        <div className="w-full flex items-center justify-between pb-2 border-b mt-2">
            <div className="w-1/2">
                <h2 className="block text-sm font-bold lg:font-extrabold lg:text-base text-blue-700"><a href={data.url} target={'_blank'}>{data.title}</a></h2>
                <p className="block text-xs text-gray-600 capitalize"><a href={data.company_url} target={"_blank"}>{data.company}</a> -
                    <span className="text-green-600 font-extrabold">{data.type}</span></p>
            </div>
            <div className="w-1/2">
                <h4 className="text-sm text-gray-700 font-bold">{data.location}</h4>
                <p className="text-xs text-gray-600 italic">{data.created_at}</p>
            </div>
        </div>
    )
};
