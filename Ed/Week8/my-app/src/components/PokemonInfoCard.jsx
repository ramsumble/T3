// display title and image of pokemon data
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// 
// 

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

export default function PokemonInfoCard(props) {

    return(
        <Card className="pokemonInfoCard">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Img src={props.imageUrl} alt="Default front sprite from PokeAPI" />
            </Card.Body>
        </Card>
    )
}