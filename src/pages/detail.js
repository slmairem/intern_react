import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/movieData.json';
import charData from '../assets/characterData.json';
import staffData from '../assets/staffData.json';
import AddReviews from '../functions/detailPage/review.js';
import Section from '../functions/detailPage/section.js';
import DetailsContent from '../functions/detailPage/picturesItemBack.js'; 

function Details() {
  const [currentSection, setCurrentSection] = useState('Overview');
  const [showFullImage, setShowFullImage] = useState(null);
  const { name } = useParams();
  const decodedName = decodeURIComponent(name); 
  const item = data.find(item => item.name === decodedName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showFullImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFullImage]);

  if (!item) {
    return <div>Item not found</div>;
  }
 
  // Character List
  const charShow = charData.filter(character => character.charShow.trim() === item.name.trim())
    .map(character => {
      const staff = staffData.find(staff => staff.staffName.trim() === character.charStaff.trim());
      return {
        ...character,
        charStaff: staff ? staff.staffName : "",
        staffImgSrc: staff ? staff.staffImgSrc : "" 
      };
    });

  // Staff List
  const staffShow = staffData.filter(staff => staff.staffShow.trim() === item.name.trim())
    .map(staff => ({
      ...staff,
      charName: charData.find(character => character.charStaff.trim() === staff.staffName.trim()).charName // Staff'ın karakterin VA'sı ile eşleşmesi
    }));

  const sections = {
    Overview: (
      <>
        <Section title="Characters" items={charShow} setCurrentSection={setCurrentSection} />
        <Section title="Staff" items={staffShow} setCurrentSection={setCurrentSection} />
        <Reviews setCurrentSection={setCurrentSection} />
      </>
    ),
    Characters: (
      <Section title="Characters" items={charShow} setCurrentSection={setCurrentSection} />
    ),
    Staff: (
      <Section title="Staff" items={staffShow} setCurrentSection={setCurrentSection} />
    ),
    Reviews: <Reviews setCurrentSection={setCurrentSection} />,
    Stats: <Stats />,
    Social: <Social />
  };

  return ( 
    <div className="bg-gray-50 min-h-screen font-IndieFlower text-lg">
      <div className="relative blur-sm">
        <img 
          src={item.imgSrc}
          alt="Background" 
          className="w-full absolute top-0 left-0 z-0 h-60 object-cover brightness-75" 
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

<Section/>

{/* Reviews */}
const Reviews = ({setCurrentSection }) => (
  <div className="h-full w-full mt-2 mb-4 ml-2 mr-2">
    <div className="ml-4">
      <h4 className='font-semibold mt-3 -mb-3'>Reviews</h4>
    </div>
    <br />
    <AddReviews />
    <div className="ml-4 text-right mt-2">
      <a 
        href="#" 
        className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900"
        onClick={() => setCurrentSection('Reviews')}
      >
        View More...
      </a>
    </div>
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