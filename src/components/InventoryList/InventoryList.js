import './InventoryList.scss';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';
import InventoryCard from '../InventoryCard/InventoryCard';

function InventoryList() {
    const inventories = [
        {}, {}, {}
    ]
    return (
        <div className='inventory-list'>
            <InventoryListHeader />
            <div>
                {inventories.map((inventory, index) => <InventoryCard />)}
            </div>
        </div>
    )
}

export default InventoryList;