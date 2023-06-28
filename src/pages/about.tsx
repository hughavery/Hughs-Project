import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="max-w-md bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-3">
          <Link to={`/bubbles`} className="ml-2 hover:text-blue-500">Back</Link>
          <div className="relative mt-4">
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
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
              Hello there! I'm Jane Doe, a passionate software engineer specializing in web development.
              I have a strong command of modern web technologies, including React, Node.js, and TypeScript.
              With my attention to detail and dedication to creating seamless user experiences,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
