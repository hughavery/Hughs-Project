import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';
import gitHubImage from '../assets/github.jpg';
import linkedinImage from '../assets/linkedin.jpg';
import phoneMail from '../assets/phone1.jpg'; 
import ContactModal from './contactModal';
import surf from '../assets/surf.jpg'
import logo from '../assets/logo.svg'
import CV from '../assets/CV Hugh.pdf'

interface Bubble {
  id: string;
  text: string;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  color: string;
  photo?: string;
  url?: string;
  endpoint?: string;
}

function Bubbles() {
  const bubbleData: Bubble[] = [
    { id: 'about', text: 'About Me', x: 0, y: 0, speedX: 0, speedY: 0, color: 'red', endpoint: '/about' },
    { id: 'experience', text: 'Experience', x: 0, y: 0, speedX: 0, speedY: 0, color: 'purple', endpoint: '/experience' },
    { id: 'projects', text: 'Projects', x: 0, y: 0, speedX: 0, speedY: 0, color: 'blue', endpoint: '/projects' },
    { id: 'social media', text: 'Social Media', x: 0, y: 0, speedX: 0, speedY: 0, color: 'green' },
    { id: 'profile', text: '', x: 0, y: 0, speedX: 0, speedY: 0, color: 'teal', photo: profileImage },
    { id: 'cv', text: 'Resume', x: 0, y: 0, speedX: 0, speedY: 0, color: 'violet'},
  ];      
  const [showModal, setShowModal] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>(bubbleData);
  const navigate = useNavigate();

  useEffect(() => {
    const bubbleSize = 200;
    const maxSpeed = 1;
    const circumference = 200;
    const radius = 100;
    const makeSmooth = 2;

    function distance(x: number, y: number) {
      return Math.sqrt(x * x + y * y);
    }

    function randInit(bubble: Bubble) {
      bubble.x = Math.random() * (window.innerWidth - bubbleSize - radius - radius) + radius;
      bubble.y = Math.random() * (window.innerHeight - bubbleSize - radius - radius) + radius;
      bubble.speedX = (Math.random() - 0.5) * maxSpeed;
      bubble.speedY = (Math.random() - 0.5) * maxSpeed;
    }

    function moveBubble(bubble: Bubble, index: number, bubbles: Bubble[]) {
      let newX = bubble.x + bubble.speedX;
      let newY = bubble.y + bubble.speedY;

      if (newX < radius + makeSmooth) {
        bubble.speedX = Math.abs(bubble.speedX);
      } else if (newX > window.innerWidth - (radius + makeSmooth)) {
        bubble.speedX = -Math.abs(bubble.speedX);
      }

      if (newY < radius + makeSmooth) {
        bubble.speedY = Math.abs(bubble.speedY);
      } else if (newY > window.innerHeight - circumference - 15) {
        bubble.speedY = -Math.abs(bubble.speedY);
      }

      for (let i = index + 1; i < bubbles.length; i++) {
        const otherBubble = bubbles[i];
        const dx = bubble.x - otherBubble.x;
        const dy = bubble.y - otherBubble.y;
        const distanceBetweenBubbles = distance(dx, dy);
        const totalRadius = bubbleSize;

        if (distanceBetweenBubbles < totalRadius) {
          const angle = Math.atan2(dy, dx);
          const totalSpeed = Math.abs(bubble.speedX) + Math.abs(bubble.speedY) + Math.abs(otherBubble.speedX) + Math.abs(otherBubble.speedY);

          bubble.speedX = Math.cos(angle) * totalSpeed;
          bubble.speedY = Math.sin(angle) * totalSpeed;
          otherBubble.speedX = -Math.cos(angle) * totalSpeed;
          otherBubble.speedY = -Math.sin(angle) * totalSpeed;

          newX = bubble.x + bubble.speedX;
          newY = bubble.y + bubble.speedY;
        }
      }

      bubble.speedX = Math.min(Math.max(bubble.speedX, -maxSpeed), maxSpeed);
      bubble.speedY = Math.min(Math.max(bubble.speedY, -maxSpeed), maxSpeed);

      bubble.x = newX;
      bubble.y = newY;
    }

    function update() {
      setBubbles((oldBubbles) =>
        oldBubbles.map((bubble, index) => {
          moveBubble(bubble, index, oldBubbles);
          return bubble;
        })
      );
      animationFrameId = requestAnimationFrame(update);
    }

    setBubbles((oldBubbles) =>
      oldBubbles.map((bubble) => {
        randInit(bubble);
        return bubble;
      })
    );

    let animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // const getRandomColor = () => {
  //   const colors = [
  //     'pink',
  //     'purple',
  //     'blue',
  //     'green',
  //     'rgb(220, 15, 15)',
  //     'rgb(217, 217, 28)',
  //     'rgb(34, 176, 176)',
  //     'rgb(212, 53, 227)',
  //   ];
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  function handleBubbleClick(bubble: Bubble) {
    if (bubble.endpoint) {
      navigate(bubble.endpoint);
    } 
    if (bubble.url) {
      window.open(bubble.url, '_blank');
    }
    if (bubble.id === 'phone') {
      setShowModal(true);
    }
    if (bubble.id === 'profile') {
      bubble.photo !== surf? bubble.photo = surf : bubble.photo = profileImage
    }
    
    if (bubble.id === 'cv') {
      // Trigger the download by creating a link element and simulating a click
      const link = document.createElement('a');
      link.href = CV; // Replace with the actual URL of your resume PDF file
      link.download = 'CV_Hugh_Avery.pdf'; // Specify the desired filename for the downloaded file
      link.click();
    }
    if (bubble.id === 'social media') {
      const radius = 100;
      const github = { id: 'github', text: '', x: bubble.x - radius, y: bubble.y, speedX: -bubble.speedX, speedY: bubble.speedY, color: 'green', photo: gitHubImage, url:'https://github.com/hughavery'};
      const phoneAndMail = { id: 'phone', text: '', x: bubble.x, y: bubble.y - radius, speedX: bubble.speedX, speedY: bubble.speedY, color: 'orange', photo: phoneMail};
      const linkedin = { id: 'linkedin', text: '', x: bubble.x + radius, y: bubble.y, speedX: bubble.speedX, speedY: bubble.speedY, color: 'gray', photo: linkedinImage, url:'https://www.linkedin.com/in/hugh-avery-b11214206'  };
      const updatedBubbles = [...bubbles.filter((b) => b.id !== 'social media'), github, linkedin, phoneAndMail];
      setBubbles(updatedBubbles);
    }
  }
  
  function closeModal() {
    setShowModal(false);
  }

  const renderBubbles = () =>
  bubbles.map((bubble) => {
    const bubbleColor = bubble.color;
    return (
      <div
        key={bubble.id}
        className={`bubble font-bold text-gray-100 bg-red-300 hover:bg-red-600`}
        style={{ left: bubble.x, top: bubble.y, backgroundColor: bubbleColor}}
        onClick={() => handleBubbleClick(bubble)}
      >
        {bubble.photo ? (
          <img
            src={bubble.photo}
            alt="Profile"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          bubble.text
        )}
      </div>
    );
  });


  return (
    <body>
      <header>
        <div className='flex justify-center' >
        <img src={logo} alt="" className="w-20 h-20 mr-4" />
        <h1 >Hugh R Avery  </h1>
        <img src={logo} alt="" className="w-20 h-20 ml-4" />
        </div>
      </header>

      <main>{renderBubbles()}</main>
      {showModal && <ContactModal onClose={closeModal} />}
    </body>
  );
}

export default Bubbles;
