import './Card.css'
import { tsPropertySignature } from '@babel/types';

const Card = (props) => {
  const classes = `card ${props.className}`;
  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;
