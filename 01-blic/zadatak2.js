var polovica =(str)=> {
    if (str.length % 2 == 0) {
      return str.slice(str.length / 2);
    }
    return str;
  }

console.log(polovica(' Javascript i nije tolko los'));