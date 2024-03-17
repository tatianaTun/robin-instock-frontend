import { Link } from "react-router-dom";
import './InventoryListHeader.scss';
import { SearchField } from "../FromFields/FormFields";

function InventoryListHeader() {
    return (
        <div className="in-header">
            <h1 className="in-header__title">Inventory</h1>
            <div className="in-header__actions">
                <SearchField />
                <Link to='/inventories/add' className="cta-button primary">+ Add New Item</Link>
            </div>
        </div>
    )
}

export default InventoryListHeader;