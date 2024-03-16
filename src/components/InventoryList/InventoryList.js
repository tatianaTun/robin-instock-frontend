import './InventoryList.scss';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';
import InventoryCard from '../InventoryCard/InventoryCard';
import InventoryTable from '../InventoryTable/InventoryTable';
import { useEffect, useState } from 'react';
import { baseURL } from '../../consts';
import axios from 'axios';

function InventoryList() {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const getInventories = async () => {
            try {
                const res = await axios.get(`${baseURL}/inventories`);
                setInventories(res.data);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        }

        getInventories();
    }, [])

    return (
        <div className='inventory-list'>
            <InventoryListHeader />
            <div className='inventory-list__cards'>
                {inventories.map(inventory => <InventoryCard key={inventory.id} inventory={inventory} />)}
            </div>
            <InventoryTable inventories={inventories} />
        </div>
    )
}

export default InventoryList;