import './InventoryStatus.scss';

function InventoryStatus({ status }) {
    const available = status === 'In Stock';

    if (available) {
        return <p className="inventory-status positive small">IN STOCK</p>
    } else {
        return <p className="inventory-status negative small">OUT OF STOCK</p>
    }
}

export default InventoryStatus;