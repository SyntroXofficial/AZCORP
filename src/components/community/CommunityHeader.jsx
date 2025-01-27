import React from 'react';

function CommunityHeader() {
  return (
    <div className="bg-[#1A1A1B] rounded-t-md border border-[#343536] p-4 mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-transparent rounded-full flex items-center justify-center -mt-12 border-4 border-[#1A1A1B] overflow-hidden">
          <img 
            src="https://i.postimg.cc/TYy1tS5W/Screenshot-1469.png"
            alt="Community Icon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white text-2xl font-bold">AZCORP</h1>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>azcorporation</span>
                <span>•</span>
                <span>Created Jan 27, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHeader;