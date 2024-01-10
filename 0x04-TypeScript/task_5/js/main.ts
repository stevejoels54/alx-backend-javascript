interface MajorCredits {
    credits: number;
    brand: 'Major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'Minor';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'Major',
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'Minor',
    };
  }
  
  // Example usage
  const majorSubject1: MajorCredits = { credits: 3, brand: 'Major' };
  const majorSubject2: MajorCredits = { credits: 4, brand: 'Major' };
  
  const minorSubject1: MinorCredits = { credits: 2, brand: 'Minor' };
  const minorSubject2: MinorCredits = { credits: 1, brand: 'Minor' };
  
  const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
  const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log(resultMajor); // Output: { credits: 7, brand: 'Major' }
  console.log(resultMinor); // Output: { credits: 3, brand: 'Minor' }
  