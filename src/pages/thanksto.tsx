import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const ThanksTo: NextPage = () => {
  return (
    <Layout title={'Thanks to'}>
      <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Thanks to
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              I would like to thank the following people
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                      GitHub
                    </a>
                  </p>
                  <a
                    href="https://github.com/lailo/next-with-tailwindcss"
                    className="block"
                  >
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Next with Tailwind CSS
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      NextJS with TypeScript and TailwindCSS (with dark theme
                      switch)
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThanksTo;
