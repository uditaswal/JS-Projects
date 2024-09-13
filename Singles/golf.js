/*
Strokes      Return
1            "Hole-in-one!"
‹= par - 2   "Eagle"
par - 1       "Birdie"
par           "Par"
par + 1       "Bogey"
par + 2       "Double Bogey"
par + 3       "Go Home!"
*/


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Eagle","GO Home!"]
function golfScore(par, strokes) {
if ( strokes === 1){ console.log(names[0])}
else if (strokes <= par -2) { console.log(names[1])}
else if (strokes === par -1) { console.log(names[2])}
else if (strokes === par) { console.log(names[3])}
else if (strokes === par +1) { console.log(names[4])}
else if (strokes === par +2) { console.log(names[5])}
else if (strokes === par +3) { console.log(names[6])}
else{console.log("Wrong input")}

}
// Change these values to test
golfScore (5,7);


// -------------
// card counter:


var count = 0;
function cc(card) {
  switch(card){
    case 1:
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
count ++
break;
case 10:
    case "J":
        case "Q":
            case "K":
                case "A":
count --
break;

    }
    var holdbet = 'Hold';
    if (count>0){
        holdbet = 'Bet'
    }
    
    return count  +" " +  holdbet;
}
сс(2);

// сс(3); сс(7); сс('K'); cc('A');
console.log(cc(4));




