import sortIcon from '../../assets/Icons/sort-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import forwardIcon from '../../assets/Icons/chevron_right-24px.svg';
import './InventoryTable.scss';
import { Link } from 'react-router-dom';
import InventoryStatus from '../InventoryStatus/InventoryStatus';

function TableRow({ inventory }) {
    return (
        <tr className="inventory-table__row">
            <td><Link to={`/inventories/${inventory.id}`} className="inventory-table__cell link">{inventory.item_name} <img src={forwardIcon} alt="" /></Link></td>
            <td><p className="inventory-table__cell">{inventory.category}</p></td>
            <td><p className="inventory-table__cell"><InventoryStatus status={inventory.status} /></p></td>
            <td><p className="inventory-table__cell">{inventory.quantity}</p></td>
            <td><p className="inventory-table__cell">{inventory.warehouse_name}</p></td>
            <td><div className="inventory-table__cell actions">
                <img src={deleteIcon} alt='Delete' />
                <img src={editIcon} alt='Edit' />
            </div></td>
        </tr>
    )
}

function InventoryTable({ inventories }) {

    return (
        <table className="inventory-table">
            <thead>
                <tr className="inventory-table__heads">
                    <th><h4 className="inventory-table__head first">INVENTORY ITEM <img src={sortIcon} alt='' /></h4></th>
                    <th><h4 className="inventory-table__head">CATEGORY <img src={sortIcon} alt='' /></h4></th>
                    <th><h4 className="inventory-table__head">STATUS <img src={sortIcon} alt='' /></h4></th>
                    <th><h4 className="inventory-table__head">QTY <img src={sortIcon} alt='' /></h4></th>
                    <th><h4 className="inventory-table__head">WAREHOUSE <img src={sortIcon} alt='' /></h4></th>
                    <th><h4 className="inventory-table__head last">ACTIONS</h4></th>
                </tr>
            </thead>
            <tbody>
                {inventories.map(inventory => <TableRow key={inventory.id} inventory={inventory} />)}
            </tbody>
        </table>
    )
}

export default InventoryTable;