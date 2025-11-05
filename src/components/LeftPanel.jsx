import React from 'react';

const LeftPanel = () => {
  return (
    <div className="relative flex w-full items-center justify-center p-8 text-white md:w-5/12" style={{
      background: 'linear-gradient(135deg, #8B0000 0%, #6e0000 50%, #4a0000 100%)'
    }}>
      {/* Subtle overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

      <div className="relative max-w-md space-y-5">
        <div>
          <p className="uppercase tracking-widest text-white/80 text-sm">Limited Opportunity</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">Join the most intensive AIBE preparation program this year.</h2>
          <p className="mt-3 text-white/90">
            Expert faculty, proven methodology, and 100% success focus.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 shadow-sm backdrop-blur">
            <p className="text-base font-medium">50 Seats Only</p>
          </div>
          <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 shadow-sm backdrop-blur">
            <p className="text-base font-medium">Starts November 14, 15 & 16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
