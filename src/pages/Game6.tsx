import React, { useState } from 'react';

const Game6: React.FC = () => {
  const [isFullSize, setIsFullSize] = useState(false);

  const toggleSize = () => {
    setIsFullSize(!isFullSize);
  };

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: isFullSize ? '100%' : '56.25%' }}>
      <button 
        onClick={toggleSize} 
        style={{ 
          position: 'absolute', 
          top: 10, 
          right: 10, 
          zIndex: 10, 
          padding: '8px 16px', 
          backgroundColor: '#333', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isFullSize ? 'Reducir' : 'Agrandar'}
      </button>
      <iframe
        src="/Game6/index.html"
        title="Construct 2 Game"
        style={{
          position: 'absolute',
          top: 0,
          left: isFullSize ? 0 : '12.5%',
          width: isFullSize ? '100%' : '75%',
          height: isFullSize ? '100%' : '75%',
          border: 'none',
        }}
        allowFullScreen
      />
    </div>
  );
};

export default Game6;
