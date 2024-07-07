const date = new Date();
const day = date.getDate()
const month = date.getMonth()+1;
const year = date.getFullYear();

// Card Functional Component
function Card(props){
  const {titleTxt, despTxt} = props;
  return <div className = 'card'> 
          <h1 className='cardHeading'>{titleTxt}</h1>
          <h3 className='cardComment'>{despTxt}</h3>
          <h3 className='cardFooter'>{day+'/' + month + '/' + year}</h3>
        </div>
}

export default Card;