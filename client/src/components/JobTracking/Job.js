import React, {useEffect} from 'react';
import NavBar from '../NavBar';
import CompanyInfo from './subComponents/CompanyInfo';
import StatusBar from './subComponents/StatusBar';
import PositionCard from './subComponents/Position';
import ContactCard from './subComponents/Contact';
import InterviewCard from './subComponents/Interview';
import OfferCard from './subComponents/Offer';

function Saved() {

  useEffect(() => {
    // Textarea height expansion
    var autoExpand = function (field) {
      // Reset field height
      field.style.height = 'inherit';
      // Get the computed styles for the element
      var computed = window.getComputedStyle(field);
      // Calculate the height
      var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                   + parseInt(computed.getPropertyValue('padding-top'), 10)
                   + field.scrollHeight
                   + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                   + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    
      field.style.height = height + 'px';
    
    };
    document.addEventListener('input', function (event) {
      if (event.target.tagName.toLowerCase() !== 'textarea') return;
      autoExpand(event.target);
    }, false);

  });

  return (
    <div className="job">
      <NavBar />
      <div className="container job-container">
        <div className="row">
          <StatusBar state="saved" />
          <CompanyInfo />
          <PositionCard />
          <ContactCard />
          <InterviewCard />
          <OfferCard />
        </div>
      </div>
    </div>
  );
}

export default Saved;