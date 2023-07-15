const MAX_LENGTH = 60;

export const cutTextIfLonger = (text) => {
  if (text.length > MAX_LENGTH) {
    const returnText = text.substring(0, MAX_LENGTH);
    return `${returnText}...`;
  }
  return text;
};
