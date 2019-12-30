import React from "react";

import {JobTags} from "./JobTags";

export const JobList = ({children}) => {
  return (
    <div className="mt-2 bg-white w-full px-6 border-gray-400 border-t-2 border-l-2 border-r-2">
      <h1 className="font-bold text-2xl text-gray-800 py-3 border-b">Jobs to apply to</h1>
        <div className="w-full flex items-start justify-center">
            <div className="w-full overflow-scroll">
                {children}
            </div>
            <div className=" hidden w-1/3 pl-4 pt-2">
                <JobTags/>
            </div>
        </div>
    </div>
  );
};
