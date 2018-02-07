function numb() {
    var numb = prompt("Give me a number: ");
    while (numb > 0) {
        var bmun = [];
        bmun.push(numb);
        console.log( numb )
        numb --
    }
}
numb()