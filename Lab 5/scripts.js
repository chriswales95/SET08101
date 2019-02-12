function encode()
{
  var text = document.getElementById("message").value;
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var cypher = [];

  for (var i = 0; i < text.length; i++){
    input = alphabet.indexOf(text[i]);

    if (input == -1){
      cypher.push(text[i]);
    } else {
      var coded = (input+13)%26;
      var letter = alphabet[coded];
      cypher.push(letter);
    }
    console.log(cypher);
  }
  document.getElementById("output").innerHTML = cypher.join("");
}
