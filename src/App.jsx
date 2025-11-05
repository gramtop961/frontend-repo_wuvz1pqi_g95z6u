import React, { useEffect, useState } from 'react';
import ModalContainer from './components/ModalContainer';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  const [open, setOpen] = useState(true);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleEnroll = () => {
    // Navigate users to enrollment sub-website (replace with actual URL as needed)
    window.open('https://www.vlslawacademy.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background page content (dimmed by overlay when modal open) */}
      <header className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-semibold text-gray-900">VLS Law Academy</h1>
        <p className="mt-1 text-gray-600">Premium AIBE preparation crafted for success.</p>
        <div className="mt-6">
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg px-4 py-2 text-white"
            style={{ backgroundColor: '#8B0000' }}
          >
            Open Enrollment Popup
          </button>
        </div>
      </header>

      <ModalContainer open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col md:flex-row">
          <LeftPanel />
          <RightPanel onPrimaryClick={handleEnroll} />
        </div>
      </ModalContainer>
    </div>
  );
}

export default App;
