fs = require('fs');

fs.readFile('roman.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  console.log(data.length-data.replace(/DCCCC|LXXXX|VIIII|CCCC|XXXX|IIII/g,'kk').length);
});