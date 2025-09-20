import { Link } from 'react-router-dom';
import './index.scss';


const VerticalCards = ({ contentArray }) => {
    return (
        <div className='vertical-cards-container'>
            {contentArray.map((aCard, idx) => (
                <div className='card' key={idx}>
                    <div className='card-title'>
                        <p>{aCard.title}</p>
                    </div>
                    <div className='card-image' style={{ backgroundImage: `url(${aCard.image})` }}></div>
                    <div className='card-content'>
                        <h1>{aCard.header}</h1>
                        <p>{aCard.paragraphOne}<br /></p>
                        <p>{aCard.paragraphTwo}<br /></p>
                        <br />
                        {aCard.buttonTo === "" ? null : <Link to={aCard.buttonTo} className='sub-button'>{aCard.buttonText}</Link>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VerticalCards;