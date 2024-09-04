import React, { useState, useRef } from 'react';

const Page3 = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const elemContainerRef = useRef(null);
  const fixedImageRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleElemMouseEnter = (image) => {
    setBackgroundImage(`url(${image})`);
  };

  const handleElemMouseLeave = () => {
    setBackgroundImage('');
  };

  return (
    <div id="page3">
      <div
        id="elem-container"
        ref={elemContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        {[
          { title: 'Makers Studio HOI', img: 'https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D' },
          { title: '50th Anniversary', img: 'https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8' },
          { title: 'NYFW Popup', img: 'https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' },
          { title: 'Air Force 1 2021', img: 'https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D' },
       ].map((item, i) => (
          <div
            key={i}
            className="elem"
            onMouseEnter={() => handleElemMouseEnter(item.img)}
            onMouseLeave={handleElemMouseLeave}
            style={{ position: 'relative' }}
          >
            <div className="overlay"></div>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
      <div
        // id="fixed-image"
        ref={fixedImageRef}
        style={{
          display: isHovering ? 'block' : 'none',
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '22vw',
          height: '26vw',
          position: 'absolute',
          top: '63%',
          left: '50%',
          borderRadius: '15px'
        }}
      ></div>
    </div>
  );
};

export default Page3;
