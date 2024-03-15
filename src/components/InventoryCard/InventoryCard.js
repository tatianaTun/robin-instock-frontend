import forwardIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { Link } from "react-router-dom";
import './InventoryCard.scss';

function InventoryCard() {
    return (
        <div className="inventory-card">
            <div className='inventory-card__content'>
                <div>
                    <div className='inventory-card__field'>
                        <h3 className="inventory-card__label">INVENTORY ITEM</h3>
                        <Link to='/' className="inventory-card__value">Television <img src={forwardIcon} alt="" /></Link>
                    </div>
                    <div className='inventory-card__field'>
                        <h3 className="inventory-card__label">INVENTORY ITEM</h3>
                        <p className="inventory-card__value">Electronics</p>
                    </div>
                </div>
                <div>
                    <div className='inventory-card__field'>
                        <h3 className="inventory-card__label">INVENTORY ITEM</h3>
                        <p className="inventory-card__value">Electronics</p>
                    </div>
                    <div className='inventory-card__field'>
                        <h3 className="inventory-card__label">INVENTORY ITEM</h3>
                        <p className="inventory-card__value">Electronics</p>
                    </div>
                    <div className='inventory-card__field'>
                        <h3 className="inventory-card__label">INVENTORY ITEM</h3>
                        <p className="inventory-card__value">Electronics</p>
                    </div>
                </div>
            </div>
            <div className='inventory-card__actions'>
                <img src={deleteIcon} alt='Delete' /><img src={editIcon} alt='Edit' />
            </div>
        </div>
    )
}

export default InventoryCard;