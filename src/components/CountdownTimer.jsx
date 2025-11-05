import React, { useEffect, useMemo, useRef, useState } from 'react';

// Helper to calculate remaining time
const getTimeLeft = (endDate) => {
  const total = Math.max(0, endDate.getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

const pad = (n) => String(n).padStart(2, '0');

const CountdownTimer = ({ end }) => {
  const endDate = useMemo(() => new Date(end), [end]);
  const startDateRef = useRef(new Date('2025-11-01T00:00:00'));
  const totalWindow = Math.max(1, endDate.getTime() - startDateRef.current.getTime());
  const [nowLeft, setNowLeft] = useState(() => getTimeLeft(endDate));

  useEffect(() => {
    const t = setInterval(() => {
      setNowLeft(getTimeLeft(endDate));
    }, 1000);
    return () => clearInterval(t);
  }, [endDate]);

  const percentElapsed = useMemo(() => {
    const elapsed = Math.min(
      Math.max(0, Date.now() - startDateRef.current.getTime()),
      totalWindow
    );
    return (elapsed / totalWindow) * 100;
  }, [totalWindow]);

  return (
    <div className="w-full">
      <p className="text-sm text-gray-500">Enrollment closes in:</p>
      <div className="mt-2 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3">
        <TimeCard label="Days" value={pad(nowLeft.days)} />
        <Colon />
        <TimeCard label="Hours" value={pad(nowLeft.hours)} />
        <Colon />
        <TimeCard label="Minutes" value={pad(nowLeft.minutes)} />
        <Colon />
        <TimeCard label="Seconds" value={pad(nowLeft.seconds)} />
      </div>

      {/* Progress bar (elapsed) */}
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full"
          style={{ width: `${percentElapsed}%`, backgroundColor: '#8B0000', transition: 'width 1s linear' }}
        />
      </div>
    </div>
  );
};

const TimeCard = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="min-w-[3.5rem] rounded-lg bg-white px-3 py-2 text-center text-xl font-semibold text-gray-900 shadow">
      {value}
    </div>
    <span className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">{label}</span>
  </div>
);

const Colon = () => <span className="px-1 text-lg font-semibold text-gray-400">:</span>;

export default CountdownTimer;
