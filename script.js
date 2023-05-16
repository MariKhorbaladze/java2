let people = ["Annie", "George", "Ema"];

console.log(people)
for (let i = 0; i < people.length; i++) { 


document.write(people[i] + "<br>")

}




var price = prompt ("Enter your price");
 
if (price < 50) {
    alert("kargi pasia");
} else if (price > 20 && price < 50) {
     alert("sashualo pasia");

} else (price > 50); {
    alert ("dzviria");
}

const number = [15,53,22,198,10,28,16,70,33,951];
  for (let i = 1; i <= 951; i++)  {
       if (i % 2 != 0) {
        console.log("even",number[i])
    }
     else if (i % 2 == 0) {
        console.log("odds",number[i])
     } 
     else console.log("not avaliable")
    }
