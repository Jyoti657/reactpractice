  var s="foobar"
  var letter="o"

//  var perc = function (s, letter){
//     const a =s.length;
//     letter=a.split('').map((b)=> b=== letter).length
//     console.log(letter);
    
//  }
var percentageLetter = function(s, letter) {
    let  newChar= s.length
      let letters= s.split(' ').filter((b)=> b===letter).length
     return Math.floor((letters/newChar)*100)

   
};
 percentageLetter(s,letter)