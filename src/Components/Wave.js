// Wave.js
const Wave = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#5B53F9', stopOpacity: 1 }} />
            <stop offset="40%" style={{ stopColor: '#AC71D6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF8E57', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path 
          fill="url(#waveGradient)" 
          d="M0,224L60,192C120,160,240,96,360,106.7C480,117,600,203,720,208C840,213,960,139,1080,122.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" 
        />
      </svg>
    );
  };
  
  export default Wave;
  