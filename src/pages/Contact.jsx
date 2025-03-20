import React from 'react';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Naam
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Bericht
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Verstuur
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Andere contactmogelijkheden</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> jouw.email@voorbeeld.com
            </p>
            <p className="text-gray-600">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/jouwprofiel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                linkedin.com/in/jouwprofiel
              </a>
            </p>
            <p className="text-gray-600">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/jouwprofiel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                github.com/jouwprofiel
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;