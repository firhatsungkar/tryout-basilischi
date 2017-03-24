var fs = require('fs');
var _ = require('lodash');
var filename = process.argv[2];
var file = '';

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

function countWord(file) {
    if(!file) return null;
    var result = [];
    var fileArray = file.toString().toLowerCase().split(' ');
    var unique = _.uniq(fileArray);
    var countAll = _.countBy(file);
    result.push('Jumlah semua kata: '+fileArray.length);
    result.push('Jumlah kata yang unik: '+unique.length);
    result.push('Jumlah kata yang unik dan jumlahnya masing-masing:');
    _.forEach(countAll, function(value, key){
        result.push(key+':'+value);
    });

    var numberOnly = fileArray.map(function(val){
        return parseInt(val);
    }).filter(Boolean);

    result.push('Ada '+ numberOnly.length +' angka: '+ numberOnly.join(', '));
    numberOnly = numberOnly.reduce(function(acc, val){ return acc + val}, 0);

    result.push('Jumlah semua angka: '+numberOnly);

    // Print to screen
    _.forEach(result, function(value){
        console.log(value);
    });
    return true;
}

fs.readFile(filename, 'utf8', function(err, data){
    if(err) throw err;
    file = data;
    countWord(file); 
});