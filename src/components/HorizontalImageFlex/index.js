import './index.scss';
import { Link } from 'react-router-dom';

const HorizontalImageFlex = ({itemArray}) => {
    return (
        <div className='timeline'>
            {
            itemArray.map((aColumn, idx) => (
                <div className='tl-item' key={idx}>
                    <div className='tl-bg' style={{backgroundImage: `url(${aColumn.image})`}}></div>
                    <div className='tl-title'>
                        <p>{aColumn.title}</p>
                    </div>
                    <div className='tl-content'>
                        <h1>{aColumn.header}</h1>
                        <p>{aColumn.paragraphOne}<br/></p>
                        <p>{aColumn.paragraphTwo}</p>
                        <br />
                        {aColumn.buttonTo === "" ? null : <Link to={aColumn.buttonTo} className='sub-button'>{aColumn.buttonText}</Link>}
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default HorizontalImageFlex;