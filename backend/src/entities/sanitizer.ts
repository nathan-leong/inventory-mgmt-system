//example fake sanitizer
const sanitizer = (text: string): string => {
  const letterNumber = /^[0-9a-zA-Z]+$/;
  if(text.match(letterNumber)) return text;
  else {
    throw 'Text:' + text + 'failed sanitizer';
  };
}

export default sanitizer;