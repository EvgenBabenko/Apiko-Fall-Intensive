const sortString = (string) => string
  .split(' ')
  .sort((a, b) => {
    const regExp = /\d+/;

    a = parseInt(a.match(regExp));
    b = parseInt(b.match(regExp));

    return a > b;
  })
  .join(' ');