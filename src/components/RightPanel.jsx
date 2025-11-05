import React from 'react';
import CountdownTimer from './CountdownTimer';

const RightPanel = ({ onPrimaryClick }) => {
  return (
    <div className="w-full p-6 md:w-7/12 md:p-8">
      {/* Badge */}
      <div className="mb-4 inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold" style={{ color: '#8B0000' }}>
        EXCLUSIVE OFFER
      </div>

      {/* Heading */}
      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">AIBE Crash Course</h3>
      <p className="mt-1 text-gray-600">November 14–16 • 3-Day Intensive</p>

      {/* Highlight boxes */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Exam Date</p>
          <p className="mt-1 text-lg font-semibold text-gray-900">November 30, 2025</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Limited Seats</p>
          <p className="mt-1 text-lg font-semibold text-gray-900">Only 50 Available</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700">
        Clear the AIBE with confidence and excellence. Enroll now before seats fill up!
      </p>

      {/* Countdown */}
      <div className="mt-6">
        <CountdownTimer end={'2025-11-13T23:59:59'} />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <button
          onClick={onPrimaryClick}
          className="w-full rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          style={{ backgroundColor: '#8B0000' }}
        >
          Enroll Now
        </button>
        <p className="mt-2 text-sm text-gray-500">Limited time, expert faculty, 100% success focus.</p>
      </div>
    </div>
  );
};

export default RightPanel;
