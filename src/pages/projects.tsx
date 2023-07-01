import saturday from '../assets/saturday.jpg';
import filmflix from '../assets/filmflix.jpg';
import BackButton from './backButton';

function Projects() {
  const saturdayDescription = 'Saturday is a team analytics application. This powerful tool has been designed to help teams and users to connect with other teams and users based on locations, sports, and sports interests, and streamline their overall team management process. I am currently working on the Saturday project in an agile environment. Our project team consists of 8 developers, scrum masters, a CTO, and a product owner.';
  const filmFlixDescription = 'Film Flix is an exciting movie review website that I developed, offering users a user-friendly platform to explore a diverse collection of films. Through this website, users can effortlessly search, filter, and sort movies based on their preferences, while enjoying comprehensive film details, ratings, and user reviews. I programmed both the front and backend for this application.';
    console.log('asdf')
    console.log(window.innerWidth)
  // Function to check if the screen width is below a certain breakpoint
  const isMobileScreen = () => window.innerWidth < 640;

  return (
    <div className="overflow-auto h-screen">
      <div className="flex flex-wrap justify-center">
        <BackButton />
        <div className={`max-w-lg bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-200 transform transition-all hover:-translate-y-1 mx-4 mt-16 mb-${isMobileScreen() ? '4' : '96'}`}>
          <a href="https://csse-s302g7.canterbury.ac.nz/prod/" target="_blank">
            <img className="rounded-t-lg" src={saturday} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">SATURDAY</h5>
              <p className="text-green-500 font-semibold">DATE:</p>
              <p className="mb-3">Feb 2023 - Present</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{saturdayDescription}</p>
              <p className="inline-block border-2 border-blue-500 rounded-full p-1 text-blue-900 bg-blue-100 font-bold ml-4">Java</p>
              <p className="inline-block border-2 border-green-500 rounded-full p-1 text-green-900 bg-green-100 font-bold ml-1">Spring Boot</p>
              <p className="inline-block border-2 border-yellow-500 rounded-full p-1 text-yellow-900 bg-yellow-100 font-bold ml-1">MySQL</p>
              <p className="inline-block border-2 border-red-500 rounded-full p-1 text-red-900 bg-red-100 font-bold ml-1">Agile/Scrum</p>
              <p className="inline-block border-2 border-purple-500 rounded-full p-1 text-purple-900 bg-purple-100 font-bold ml-1 mb-4">Playwright</p>
            </div>
          </a>
        </div>

        <div className={`max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-200 transform transition-all hover:-translate-y-1 mt-16 mx-4 mb-${isMobileScreen() ? '4' : '96'}`}>
          <a href="https://hughaveryfilmflix.netlify.app" target="_blank">
            <img className="rounded-t-lg" src={filmflix} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">FILM FLIX</h5>
              <p className="text-green-500 font-semibold">DATE:</p>
              <p className="mb-3">May 2023</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{filmFlixDescription}</p>
              <p className="inline-block border-2 border-orange-500 rounded-full p-1 text-blue-900 bg-orange-100 font-bold">React.js</p>
              <p className="inline-block border-2 border-teal-500 rounded-full p-1 text-blue-900 bg-teal-100 font-bold ml-1">Bootstrap</p>
              <p className="inline-block border-2 border-red-500 rounded-full p-1 text-blue-900 bg-red-100 font-bold ml-1">Express.js</p>
              <p className="inline-block border-2 border-green-500 rounded-full p-1 text-blue-900 bg-green-100 font-bold ml-1">Node.js</p>
              <p className="inline-block border-2 border-indigo-500 rounded-full p-1 text-blue-900 bg-indigo-100 font-bold ml-1">TypeScript</p>
              <p className="inline-block border-2 border-yellow-500 rounded-full p-1 text-blue-900 bg-yellow-100 font-bold ml-44 mt-1">Postman</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
