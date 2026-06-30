const letterCapitalizer = (text: string) => {
  const capLetter = String.fromCharCode(text.charCodeAt(0) - 32);
  return `${capLetter}${text.slice(1)}`;
};

export default letterCapitalizer;
