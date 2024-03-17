import { useEffect, useState } from "react";
import "./AddInventoryPage.scss";
import invalidIcon from "../../assets/Icons/error-24px.svg";
import { baseURL } from "../../consts";
import { useNavigate, Link } from 'react-router-dom';
import backIcon from '../../assets/Icons/arrow_back-24px.svg';

import axios from "axios";

function AddInventoryPage() {
    const navigate = useNavigate();


    const categoryList = [
        "Electronics",
        "Gear",
        "Apparel",
        "Accessories",
        "Health",
    ];


    const [item_name, setItem_name] = useState(null);
    const [description, setDescription] = useState(null);
    const [category, setCategory] = useState(categoryList[0]);
    const [status, setStatus] = useState("Out of Stock");
    const [warehouse_id, setWarehouse_id] = useState(null);
    const [quantity, setQuantity] = useState("0");

    const [warehousesList, setWarehouseList] = useState([]);

    const [isItemFilled, setIsItemFilled] = useState(true);
    const [isDescriptionFilled, setIsDescriptionFilled] = useState(true);
    const [isQuantityFilled, setIsQuantityFilled] = useState(true);
    const [formSuccessful, setFormSuccessful] = useState(false)


    //Validation errors
    // Validation rules for each input field
    const validateInputs = () => {
        const errors = {};
        setIsItemFilled(true);
        setIsDescriptionFilled(true);
        setIsQuantityFilled(true);

        if (!item_name) {
            errors.item_name = "Item name is required";
            setIsItemFilled(false)
        }
        if (!description) {
            errors.description = "Description is required";
            setIsDescriptionFilled(false)
        }
        if (!category) {
            errors.category = "Category is required";
        }
        if (!status) {
            errors.status = "Status is required";
        }
        if (status === "In Stock" && !quantity) {
            errors.quantity = "Quantity is required for items in stock";

        }



        return Object.keys(errors).length === 0; //Checks if this is true or false.
    };

    const invalidMessage = (
        <div className="form__error">
            <img src={invalidIcon} alt="invalid-icon" className="tbd" />
            This field is required
        </div>);
    const successMessage = (
        <div className="form__success">

             New Inventory Added 
        </div>);

    const getWarehousesList = async () => {
        try {
            const requestUrl = `http://localhost:8080/warehouses`;
            const result = await axios.get(requestUrl);
            setWarehouseList(result.data);
            setWarehouse_id(result.data[0].id)
        } catch (error) {
            console.log(error);
        }
    };

    const addInventory = async (inventoryData) => {
        try {
            const requestUrl = `${baseURL}/inventories/`;
            const result = await axios.post(requestUrl, inventoryData);
        } catch (error) {
            console.log(error);
        }
    };

    function inventoryAddSubmit(e) {
        e.preventDefault();

        const inventoryData = {
            warehouse_id: warehouse_id,
            item_name: item_name,
            description: description,
            category: category,
            status: status,
            quantity: quantity,
        };

        if (!validateInputs()) {
            // Skip form submission

            return
        }
        else if (status === "In Stock") {
            if (!e.target.quantityName.value) {
                // Skip form submission

                setIsQuantityFilled(false)
                return
            }
        }
        if (validateInputs()) {
            // Proceed with form submission

            addInventory(inventoryData);

            setFormSuccessful(true)


        }
        //Navigate back to the inventories page

        setTimeout(() => navigate("/inventories"), 4000); //pick the right navigation path
    }

    function statusHandle(value) {
        setStatus(value);
        if (status === "Out of Stock") {
            setQuantity("0")
        } else {
        }
    }
    useEffect(() => {


        getWarehousesList();
    }, []); //dependency list

    if (!warehousesList) {
        return <div>Loading page...</div>;
    }

    return (
        <div className="add-inventory">
            <div className="add-inventory__header">
                <Link to="/inventories">
                    <img alt="go back" src={backIcon}></img>
                </Link>
                <h1>Add New Inventory Item</h1>
            </div>
            <form className="add-inventory__form" onSubmit={inventoryAddSubmit}>
                <div className="add-inventory__inputs-container">
                    <div className="add-inventory__item-details">
                        <h2 className="add-inventory__details-header">Item Details</h2>
                        <div className="add-inventory__cards-container">
                            <div className="add-inventory__card">
                                <label>Item Name</label>
                                <input
                                    type="text"

                                    onChange={(e) => setItem_name(e.target.value)}
                                    placeholder="Item Name"
                                ></input>
                                {isItemFilled ? "" : invalidMessage}
                            </div>
                            <div className="add-inventory__card">
                                <label>Description</label>
                                <textarea
                                    placeholder="Description"
                                    type="text"

                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                                {isDescriptionFilled ? "" : invalidMessage}
                            </div>
                            <div className="add-inventory__card">
                                <label>Category</label>
                                <select

                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    {categoryList.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="add-inventory__item-availability">
                        <h2>Item Availability</h2>
                        <div className="add-inventory__cards-container">
                            <div className="add-inventory__card">
                                <h3 className="add-inventory__status-header">Status</h3>
                                <div className="add-inventory__radio-container">
                                    <div className="add-inventory__radio add-inventory__in-stock">
                                        <input
                                            type="radio"
                                            name="InStockStatus"
                                            value="In Stock"
                                            checked={status === "In Stock"}
                                            onChange={(e) => {
                                                statusHandle(e.target.value)

                                            }}
                                        ></input>
                                        <span className="add-inventory__radio-label">
                                            In stock
                                        </span>
                                    </div>
                                    <div className="add-inventory__radio add-inventory__out-stock">
                                        <input
                                            type="radio"
                                            name="OutOfStockStatus"
                                            value="Out of Stock"
                                            checked={status === "Out of Stock"}
                                            onChange={(e) => {
                                                statusHandle(e.target.value)
                                                if (e.target.value === "Out of Stock") {
                                                    setQuantity("0")
                                                }

                                            }}
                                        ></input>
                                        <span className="add-inventory__radio-label">
                                            Out of stock
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {status === "In Stock" && (
                                <div className="add-inventory__card">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        type="number"
                                        name="quantityName"
                                        id="quantity"

                                        onChange={(e) => setQuantity(e.target.value)}
                                        placeholder="Quantity"

                                    ></input>
                                    {isQuantityFilled ? "" : invalidMessage}
                                </div>
                            )}
                            <div className="add-inventory__card">
                                <label>Warehouse</label>
                                <select

                                    onChange={(e) => {
                                        setWarehouse_id(e.target.value)
                                    }
                                    }
                                >
                                    {warehousesList.map((warehouse) => (
                                        <option key={warehouse.id} value={warehouse.id}>
                                            {warehouse.warehouse_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {formSuccessful ? successMessage : ""}
                <div className="add-inventory__buttons">
                    <Link to="/inventories">
                        <button className="add-inventory__cancel-button">Cancel</button>
                    </Link>

                    <button type="submit" className="add-inventory__submit-button">
                        Save
                    </button>
                </div>
            </form>


        </div>
    );
}


export default AddInventoryPage