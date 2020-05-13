let friends = ['Brandon', 'Anna', 'Timothy', 'Shilah', 'Brittany'];
let x = 100
let y = x - 1
let z = 0
let names = friends[z]
lyric1 = 'lines';
lyric2 = 'line';

for (i = 0; i < friends.length; i++) {
    x = 100
    y = x - 1

    for (j = 0; j < 97; j++) {
        x--
        y--
        let lyrics = x + ' lines of code in the file, ' + x + ' lines of code; ' + friends[z] + ' strikes one out, clears it all out, ' + y + ' lines of code in the file';
        console.log(lyrics)
    }
    x--
    y--
    let lyrics2 = x + ' line of code in the file, ' + x + ' lines of code; ' + friends[z] + ' strikes one out, clears it all out, ' + y + ' more line of code in the file';
    console.log(lyrics2);
    lyrics2 = 1 + ' line of code in the file, ' + 1 + ' line of code; ' + friends[z] + ' strikes one out, clears it all out, no more line of code in the file';
    console.log(lyrics2)
    z++
}
