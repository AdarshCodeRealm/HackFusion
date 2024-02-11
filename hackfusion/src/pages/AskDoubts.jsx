
import React, { useState } from 'react';
import PostBlock from '../components/PostBlock';

function AskDoubts() {
  const [showPostBlock, setShowPostBlock] = useState(true);

  const textProps = {
    titleLabel: "Ask Your Doubt",
    titleInputLabel: "Question Title",
    postInputLabel: "Your Doubt",
    submitButtonText: "Ask"
  };

  const handleHidePostBlock = () => {
    setShowPostBlock(false);
  };

  return (
    <div>
      <h1 className='text-white text-xl'>AskDoubts</h1>
      {showPostBlock && <PostBlock textProps={textProps} />}
      <button onClick={handleHidePostBlock}>Hide Post Block</button>
    </div>
  );
}

export default AskDoubts;