import React, { useState } from 'react';

const SimilarityChecker = () => {
  const [phrase1, setPhrase1] = useState('');
  const [phrase2, setPhrase2] = useState('');

  const checkSimilarity = () => {
    // Implement your similarity check logic here
  };

  return (
    <div>
      <input type="text" value={phrase1} onChange={e => setPhrase1(e.target.value)} placeholder="Phrase 1" />
      <input type="text" value={phrase2} onChange={e => setPhrase2(e.target.value)} placeholder="Phrase 2" />
      <button onClick={checkSimilarity}>Get Similarity</button>
    </div>
  );
};

export default SimilarityChecker;
