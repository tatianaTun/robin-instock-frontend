import './InventoryStatus.scss';

function InventoryStatus({ status }) {
    const available = status === 'In Stock';

    if (available) {
        return <span className="inventory-status positive small">IN STOCK</span>
    } else {
        return <span className="inventory-status negative small">OUT OF STOCK</span>
    }
}

export default InventoryStatus;