/* eslint-disable */
import './pokemon.css';

const Pokemon = ({className, name, imgUrl}) => {
    return(
        <div className={className}>
            <p> {name}</p>
            <img src={imgUrl} alt={name}></img>
        </div>
    )
}
export default Pokemon;
