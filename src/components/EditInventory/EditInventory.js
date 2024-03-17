import { useNavigate } from "react-router-dom";
import "./EditInventory.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../consts";

function EditInventory() {
  const navigate = useNavigate(); //to navigate back to the inventory details page
  const { inventoriesId } = useParams();

  const categoryList = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];

  const [inventory, setInventory] = useState(null);
  const [item_name, setItem_name] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState(null);
  const [warehouse_id, setWarehouse_id] = useState(null);
  const [quantity, setQuantity] = useState("0");

  const [warehouse, setWarehouse] = useState(null);
  const [warehousesList, setWarehouseList] = useState([]);

  //Validation errors
  const [errors, setErrors] = useState({});
  // Validation rules for each input field
  const validateInputs = () => {
    const errors = {};
    if (!item_name.trim()) {
      errors.item_name = "Item name is required";
    }
    if (!description.trim()) {
      errors.description = "Description is required";
    }
    if (!category) {
      errors.category = "Category is required";
    }
    if (!status) {
      errors.status = "Status is required";
    }
    if (status === "In stock" && !quantity.trim()) {
      errors.quantity = "Quantity is required for items in stock";
    }
    setErrors(errors);
    console.log(errors);
    return Object.keys(errors).length === 0; //Checks if this is true or false.
  };

  const getInventory = async () => {
    try {
      const requestUrl = `${baseURL}/inventories/${inventoriesId}`;

      const result = await axios.get(requestUrl);
      const fetchedInventory = result.data;
      if (inventory === null) {
        setInventory(fetchedInventory);
      }
      if (fetchedInventory !== null) {
        setItem_name(fetchedInventory.item_name);
        setDescription(fetchedInventory.description);
        setCategory(fetchedInventory.category);
        setStatus(fetchedInventory.status);
        setWarehouse_id(fetchedInventory.warehouse_id);
        setQuantity(fetchedInventory.quantity);
      }
    } catch (error) {
      console.log(error);
    }

    getWarehouse();
  };

  const getWarehouse = async () => {
    try {
      const requestUrl = `${baseURL}/warehouses/${inventory.warehouse_id}`;

      const result = await axios.get(requestUrl);
      setWarehouse(result.data.warehouse_name);
    } catch (error) {
      console.log(error);
    }
  };

  const getWarehousesList = async () => {
    try {
      const requestUrl = `http://localhost:8080/warehouses`;
      const result = await axios.get(requestUrl);
      setWarehouseList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editInventory = async (inventoryData) => {
    try {
      const requestUrl = `${baseURL}/inventories/${inventoriesId}`;
      const result = await axios.put(requestUrl, inventoryData);
    } catch (error) {
      console.log(error);
    }
  };

  function inventoryEditSubmit(e) {
    e.preventDefault();

    const inventoryData = {
      warehouse_id: warehouse_id,
      item_name: item_name,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
    };

    if (validateInputs()) {
      // Proceed with form submission
      editInventory(inventoryData);
    }

    //Navigate back to the inventory details page
    navigate("/inventories"); //pick the right navigation path
  }

  function statusHandle(value) {
    setStatus(value);
    if (status === "In Stock") {
    } else {
    }
  }

  useEffect(() => {
    getInventory();

    getWarehousesList();
  }, [inventory]); //dependency list

  if (!inventory || !warehouse || !warehousesList) {
    return <div>Loading page...</div>;
  }

  return (
    <div className="edit-inventory">
      <div className="edit-inventory__header">
        <Link to={`/inventories/${inventoriesId}`}>
          <img src={backIcon}></img>
        </Link>
        <h1>Edit Inventory Item</h1>
      </div>
      <form className="edit-inventory__form" onSubmit={inventoryEditSubmit}>
        <div className="edit-inventory__inputs-container">
          <div className="edit-inventory__item-details">
            <h2 className="edit-inventory__details-header">Item Details</h2>
            <div className="edit-inventory__cards-container">
              <div className="edit-inventory__card">
                <label>Item Name</label>
                <input
                  type="text"
                  onChange={(e) => setItem_name(e.target.value)}
                  placeholder={inventory.item_name}
                ></input>
              </div>
              <div className="edit-inventory__card">
                <label>Description</label>
                <textarea
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={inventory.description}
                ></textarea>
              </div>
              <div className="edit-inventory__card">
                <label>Category</label>
                <select
                  defaultValue={inventory.category}
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
          <div className="edit-inventory__item-availability">
            <h2>Item Availability</h2>
            <div className="edit-inventory__cards-container">
              <div className="edit-inventory__card">
                <h3 className="edit-inventory__status-header">Status</h3>
                <div className="edit-inventory__radio-container">
                  <div className="edit-inventory__radio edit-inventory__in-stock">
                    <input
                      type="radio"
                      name="InStockStatus"
                      value="In Stock"
                      checked={status === "In Stock"}
                      onChange={(e) => statusHandle(e.target.value)}
                    ></input>
                    <span className="edit-inventory__radio-label">
                      In stock
                    </span>
                  </div>
                  <div className="edit-inventory__radio edit-inventory__out-stock">
                    <input
                      type="radio"
                      name="OutOfStockStatus"
                      value="Out of Stock"
                      checked={status === "Out of Stock"}
                      onChange={(e) => statusHandle(e.target.value)}
                    ></input>
                    <span className="edit-inventory__radio-label">
                      Out of stock
                    </span>
                  </div>
                </div>
              </div>
              {status === "In Stock" && (
                <div className="edit-inventory__card">
                  <label>Quantity</label>
                  <input
                    type="number"
                    defaultValue={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder={inventory.quantity}
                  ></input>
                </div>
              )}
              <div className="edit-inventory__card">
                <label>Warehouse</label>
                <select
                  defaultValue={warehouse}
                  onChange={(e) => setWarehouse_id(e.target.value)}
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

        <div className="edit-inventory__buttons">
          <Link to={`/inventories`}>
            <button className="edit-inventory__cancel-button">Cancel</button>
          </Link>
          <button type="submit" className="edit-inventory__submit-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditInventory;
