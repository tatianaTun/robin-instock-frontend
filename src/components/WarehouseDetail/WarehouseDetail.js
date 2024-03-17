import './WarehouseDetail.scss';

function WarehouseDetail({ warehouse }) {
    return (
        <div className="warehouse-detail">
            <div className="warehouse-detail__field large">
                <h3 className='warehouse-detail__label'>WAREHOUSE ADDRESS</h3>
                <p>{warehouse.address}</p>
            </div>
            <div className='warehouse-detail__sub'>
                <div className="warehouse-detail__field">
                    <h3 className='warehouse-detail__label'>CONTACT NAME</h3>
                    <p>{warehouse.contact_name}</p>
                    <p>{warehouse.contact_position}</p>
                </div>
                <div className="warehouse-detail__field">
                    <h3 className='warehouse-detail__label'>CONTACT INFORMATION</h3>
                    <p>{warehouse.contact_phone}</p>
                    <p>{warehouse.contact_email}</p>
                </div>
            </div>
        </div>
    )
}

export default WarehouseDetail;