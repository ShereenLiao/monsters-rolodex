import './card-list.style.css'
import Card from '../card-container/card.component'

const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => 
          <Card monster={monster}/>
      )}
    </div>
  );
}


export default CardList;
