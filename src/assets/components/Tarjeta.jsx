import propTypes from 'prop-types'; 
import "../css/Style.css";

const TarjetaDragronBall = (props) =>{
    return(
        <div className="tarjeta">
            <div  className="tarjeta-header">
                <img src={props.image} />
            </div>
            <div  className="tarjeta-body">
                <h3 className='nombre'>Nombre: {props.name}</h3>
                <p className='ki'>Max KI: {props.ki}</p>
                <p className='raza'>Raza: {props.race}</p>
                <p className='descripcion'>{props.description}</p>

            </div>
        </div>
    )
}
TarjetaDragronBall.propTypes = {
    name: propTypes.string,
    image: propTypes.string,
    ki: propTypes.string,
    race: propTypes.string,
    description: propTypes.string
}   
export default TarjetaDragronBall;