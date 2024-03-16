import { useEffect, useState } from 'react';
import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';
import './WarehousePage.scss';
import axios from 'axios';
import { baseURL } from '../../consts';
import { useParams } from 'react-router-dom';

function WarehousePage() {
    const { warehouseId } = useParams()
    console.log(warehouseId)
    const [warehouse, setWarehouse] = useState({
        id: 1,
        warehouse_name: 'Manhattan',
        address: '503 Broadway',
        city: 'New York',
        country: 'USA',
        contact_name: 'Parmin Aujla',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'paujla@instock.com',
    })

    useEffect(() => {
        const getWarehouse = async () => {
            try {
                const res = await axios.get(`${baseURL}/warehouses/${warehouseId}`);
                setWarehouse(res.data);
                console.log(res.data);
            }
            catch (err) {
                console.error(err);
            }
        }

        getWarehouse()
    }, [warehouseId]);

    return (
        <main className="warehouse-inventory-page">
            <WarehouseInventoryList warehouse={warehouse} />
        </main>
    )
}

export default WarehousePage;