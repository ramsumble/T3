let someFruit = [
    "mangoes",
    "more mangoes",
    "yeah just mangoes"
  ]
  
export default function FruitList () {
let fruitListItems = someFruit.map((fruit => <li key={fruit}>{fruit}</li>))
return fruitListItems;
}
