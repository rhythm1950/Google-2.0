import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <div>
          <p className="pb-3 pl-8">Bangladesh</p>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
          <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <GlobeIcon className="h-5 mr-1 text-green-700" />
            Developed By Shahriar Rhythm
          </div>

          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search Works</p>
          </div>

          <div className="flex justify-center space-x-8 md:ml-auto">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
