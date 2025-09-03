import React from 'react';

const LoadingFallback = () => {
  // Inline styles for the loading spinner
  const spinnerStyle = {
    animation: 'spin 1s linear infinite',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 text-center">
      <div className="relative w-24 h-24 mb-6">
        <div
          className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent"
          style={spinnerStyle}
        ></div>
        <div
          className="absolute inset-2 rounded-full border-4 border-blue-400 border-b-transparent"
          style={{
            ...spinnerStyle,
            animationDelay: '0.15s',
          }}
        ></div>
        <div
          className="absolute inset-4 rounded-full border-4 border-blue-300 border-l-transparent"
          style={{
            ...spinnerStyle,
            animationDelay: '0.3s',
          }}
        ></div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Loading Portfolio
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        Preparing something amazing for you. This will just take a moment...
      </p>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `
      }} />
    </div>
  );
};

export default LoadingFallback;
