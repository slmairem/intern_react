import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json'; 
import AddReviews from '../functions/detailPage/review.js';
import Section from '../functions/detailPage/section.js';
import DetailsContent from '../functions/detailPage/picturesItemBack.js'; 

function Details() {
  const [currentSection, setCurrentSection] = useState('Overview');
  const [showFullImage, setShowFullImage] = useState(null);
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  // Find the movie or series by name
  const item = data.Movies.find(movie => movie.name === decodedName) ||
               data.Series.find(series => series.name === decodedName);

  useEffect(() => {
    document.body.style.overflow = showFullImage ? 'hidden' : ''; 
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFullImage]);

  if (!item) {
    return <div>Item not found</div>;
  }

  // Character List
  const charShow = item.characters.map(character => ({
    ...character,
    charStaff: character.charStaffName,
    charImgSrc: character.charImgSrc 
  }));

  // Staff List
  const staffShow = item.characters.map(character => ({
    staffName: character.charStaffName,
    charName: character.charName,
    staffImgSrc: character.staffImgSrc
  }));

  const sections = {
    Overview: (
      <>
        <Section title="Characters" items={charShow} setCurrentSection={setCurrentSection} currentSection={currentSection} />
        <Section title="Staff" items={staffShow} setCurrentSection={setCurrentSection} currentSection={currentSection} />
        <Reviews setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </>
    ),
    Characters: (
      <Section title="Characters" items={charShow} setCurrentSection={setCurrentSection} currentSection={currentSection} />
    ),
    Staff: (
      <Section title="Staff" items={staffShow} setCurrentSection={setCurrentSection} currentSection={currentSection} />
    ),
    Reviews: <Reviews setCurrentSection={setCurrentSection} currentSection={currentSection} />,
    Stats: <Stats />,
    Social: <Social />
  };

  return ( 
    <div className="bg-gray-50 min-h-screen font-IndieFlower text-lg">
      <div className="relative blur-sm">
        <img 
          src={item.imgSrc}
          alt="Background" 
          className="w-full absolute -top-12 left-0 z-0 h-60 object-cover brightness-75" 
        />
      </div>
      
      <DetailsContent
        item={item}
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        showFullImage={showFullImage}
        setShowFullImage={setShowFullImage}
      />
    </div>
  );
}

const Reviews = ({ setCurrentSection, currentSection }) => (
  <div className="h-full w-full mt-2 mb-4 ml-2 mr-2">
    <div className="ml-4">
      <h4 className='font-semibold mt-3 -mb-3'>Reviews</h4>
    </div>
    <br />
    <AddReviews />
    {currentSection === 'Overview' && (
      <div className="ml-4 text-right mt-2">
        <a 
          href="#" 
          className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900"
          onClick={() => setCurrentSection('Reviews')}
        >
          View More...
        </a>
      </div>
    )}
  </div>
);

const Stats = () => (
  <div className="h-full w-full ml-2">
    <div className="ml-5">
      <h4 className='font-semibold mt-3 -mb-3'>Stats</h4>
    </div>
    {/* Stats Content */}
  </div>
);

const Social = () => (
  <div className="h-full w-full ml-2">
    <div className="ml-5">
      <h4 className='font-semibold mt-3 -mb-3'>Social</h4>
    </div>
    {/* Social Content */}
  </div>
);

export default Details;
