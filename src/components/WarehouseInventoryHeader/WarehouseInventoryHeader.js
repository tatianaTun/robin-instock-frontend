import './WarehouseInventoryHeader.scss';
import backIcon from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseInventoryHeader({ warehouseName }) {
    return (
        <div className="wi-header">
            <div className='wi-header__nav'>
                <img src={backIcon} alt='Back' />
                <h1>{warehouseName}</h1>
            </div>
            <button className="wi-header__button">
               

                    <img src={editIcon} alt='Edit' className="wi-header__button--icon" />
                
                <span className="wi-header__button--label">Edit</span></button>
        </div>
    )
}

export default WarehouseInventoryHeader;