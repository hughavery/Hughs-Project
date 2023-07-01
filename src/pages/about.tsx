import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';
import BackButton from './backButton';
function About() {
  return (
    <div>
    <BackButton />
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="max-w-md bg-gray-600 rounded-lg shadow-lg overflow-hidden">
        <div className="p-3">
          <Link to={`/bubbles`} className="ml-2 hover:text-blue-500">Back</Link>
          <div className="relative mt-4">
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full mb-8">
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <p className="text-lg">
             Hello there! My name is Hugh Avery, and I am a passionate and driven computer science student with a strong
             enthusiasm for technology and innovation. I am currently pursuing a Bachelor of Science majoring in Computer 
             Science at the University of Canterbury. My goal is to secure an exciting role as a full-stack developer where 
             I can apply my knowledge and skills in a professional setting.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
