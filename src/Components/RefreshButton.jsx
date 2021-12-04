import React from 'react';


function RefreshButton() {
  
  function refreshPage(e) {
    e.preventDefault()

    window.location.reload(false);
  }
  
  return (
    <div>
      <img src={refresh} alt="refresh" onClick={refreshPage} className="refresh_button" />
    </div>
  );
}

export default RefreshButton;