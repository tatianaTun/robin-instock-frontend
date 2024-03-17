import { useEffect, useState } from "react";
import "./EditWarehousePage.scss";
import { phone } from "phone";
import validator from 'validator';
import invalidIcon from "../../assets/Icons/error-24px.svg";
import { baseURL } from "../../consts";
import { useNavigate, useParams, Link } from 'react-router-dom';
import backIcon from '../../assets/Icons/arrow_back-24px.svg';


import axios from "axios";

function EditWarehousePage() {
    const { warehouseId } = useParams()
    const navigate = useNavigate();
    const [defaultValues, setDefaultValues] = useState({})
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isEmailAddressValid, setIsEmailAddressValid] = useState(true);
    const [isWarehouseNameFilled, setIsWarehouseNameFilled] = useState(true);
    const [isAddressFilled, setIsAddressFilled] = useState(true);
    const [isCityFilled, setIsCityFilled] = useState(true);
    const [isCountryFilled, setIsCountryFilled] = useState(true);
    const [isContactNameFilled, setIsContactNameFilled] = useState(true);
    const [isPositionFilled, setIsPositionFilled] = useState(true);
    const [isPhoneNumberFilled, setIsPhoneNumberFilled] = useState(true);
    const [isEmailAddressFilled, setIsEmailAddressFilled] = useState(true);

    const [formSuccessful, setFormSuccessful] = useState(false)
 
    useEffect(() => {
        const getData = async () => {
            try {
                const warehouseDetails = await axios.get(`${baseURL}/warehouses/${warehouseId}`)

                setDefaultValues(warehouseDetails.data)
                setEmail(warehouseDetails.data.contact_email);
                setPhoneNo(warehouseDetails.data.contact_phone);

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [warehouseId])
    if (!defaultValues) {
        return <div> Loading Warehouse Details</div>
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
        return checkEmailAddress(event.target.value);
    };
    const handleChangePhoneNo = (event) => {
        setPhoneNo(event.target.value)
        return checkPhone(event.target.value)
    };
    function checkPhone(phoneNo) {

        if (!isPhoneNoValid(phoneNo)) {
            if (!phoneNo) {
                setIsPhoneNumberFilled(false);
            }
            setIsPhoneNumberFilled(true)
            setIsPhoneNumberValid(false);
            return false;
        }
        setIsPhoneNumberValid(true);
        return true
    }
    function checkEmailAddress(email) {
        if (!isEmailValid(email)) {
            if (!email) {

                setIsEmailAddressFilled(false)
            }
            setIsEmailAddressFilled(true)
            setIsEmailAddressValid(false)
            return false;


        } else {
            setIsEmailAddressValid(true)
            setIsEmailAddressFilled(true)
            return true
        }


    }

    const invalidMessage = (
        <div className="form__error">
            <img src={invalidIcon} alt="invalid-icon" />
            This field is required
        </div>);

    const successMessage = (
        <div className="form__success">

             Warehouse Updated 
        </div>);


    const isEmailValid = (email) => {
        if (!email) {
            return false
        }
        return validator.isEmail(email)
    };
    const isPhoneNoValid = (number) => {
        return phone(number, { country: '' }).isValid
    };

    const isFormValid = (event) => {
        const formFields = event.target;

        const fields = [formFields.warehouseName.value
            , formFields.address.value
            , formFields.city.value
            , formFields.country.value
            , formFields.contactName.value
            , formFields.position.value
            , formFields.phoneNo.value
            , formFields.email.value];

        const setFunctions = [setIsWarehouseNameFilled
            , setIsAddressFilled
            , setIsCityFilled
            , setIsCountryFilled
            , setIsContactNameFilled
            , setIsPositionFilled
            , setIsPhoneNumberFilled
            , setIsEmailAddressFilled];
        function isFilled() {
            for (let index = 0; index < fields.length; index++) {
                const element = fields[index];
                setFunctions[index](true);
                if (!element) {
                    setFunctions[index](false)

                }


            }
            if (!formFields.warehouseName.value
                || !formFields.address.value
                || !formFields.city.value
                || !formFields.country.value
                || !formFields.contactName.value
                || !formFields.position.value
                || !formFields.phoneNo.value
                || !formFields.email.value) {


                return false;
            }
            return true
        }


        return (true && isFilled() && handleChangeEmail && handleChangePhoneNo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid(event)) {
            const newWarehouse = {

                warehouse_name: event.target.warehouseName.value,
                address: event.target.address.value,
                city: event.target.city.value,
                country: event.target.country.value,
                contact_name: event.target.contactName.value,
                contact_position: event.target.position.value,
                contact_phone: event.target.phoneNo.value,
                contact_email: event.target.email.value

            }

            const sendData = async () => {
                try {
                    const response = await axios.put(`${baseURL}/warehouses/${warehouseId}`, newWarehouse)

                } catch (error) {
                    console.log(error)
                }
            }
            setFormSuccessful(true)
            sendData()
            setTimeout(() => navigate("/warehouses"), 4000)

            return
        } else {

            return
        }
    };



    return (
        <div className="edit-warehouse">
            <div className="edit-warehouse__header" >
                <Link to={`/warehouses/`}>
                    <img alt="go back" src={backIcon}></img>
                </Link>
                <h1>Edit Warehouse Item</h1>
            </div>

            <form onSubmit={handleSubmit} className="edit-warehouse__form">
                <div className="edit-warehouse__inputs-styler">
                    <div className="edit-warehouse__inputs-container">
                        <h2 className="edit-warehouse__details-header"> Warehouse Details</h2>
                        <label>
                            Warehouse Name <input type="text" name="warehouseName"
                                defaultValue={defaultValues.warehouse_name}
                                placeholder="Warehouse Name"
                                style={isWarehouseNameFilled ? {} : { border: "1.4px solid red" }}

                            />
                        </label>
                        {isWarehouseNameFilled ? "" : invalidMessage}
                        <label>
                            Street Address <input type="text" name="address"
                                defaultValue={defaultValues.address} placeholder="Street Address"
                                style={isAddressFilled ? {} : { border: "1.4px solid red" }}
                            />
                        </label>

                        {isAddressFilled ? "" : invalidMessage}
                        <label>
                            City <input type="text" name="city" defaultValue={defaultValues.city}
                                placeholder="City"
                                style={isCityFilled ? {} : { border: "1.4px solid red" }}
                            />
                        </label>
                        {isCityFilled ? "" : invalidMessage}
                        <label>
                            Country <input type="text" name="country" placeholder="Country"
                                defaultValue={defaultValues.country}
                                style={isCountryFilled ? {} : { border: "1.4px solid red" }}


                            />

                        </label>
                        {isCountryFilled ? "" : invalidMessage}

                    </div>


                    <div className="edit-warehouse__inputs-container edit-warehouse__inputs-container--divider">
                        <h2 className="edit-warehouse__details-header"> Contact Details</h2>
                        <label>
                            Contact Name <input type="text" name="contactName"
                                defaultValue={defaultValues.contact_name}
                                placeholder="Contact Name"

                                style={isContactNameFilled ? {} : { border: "1.4px solid red" }}
                            />
                        </label>
                        {isContactNameFilled ? "" : invalidMessage}
                        <label>
                            Position <input type="text" name="position" placeholder="Position"
                                defaultValue={defaultValues.contact_position}
                                style={isPositionFilled ? {} : { border: "1.4px solid red" }}
                            />
                        </label>
                        {isPositionFilled ? "" : invalidMessage}
                        <label>
                            Phone Number <input type="text" name="phoneNo"
                                onChange={handleChangePhoneNo}
                                value={phoneNo} placeholder="Phone number"
                                style={isPhoneNumberFilled && isPhoneNumberValid ? {} : { border: "1.4px solid red" }}
                            />
                        </label>
                        {isPhoneNumberFilled ? "" : invalidMessage}
                        {isPhoneNumberValid ? "" : " Input a valid phone number"}
                        <label>
                            Email <input type="text" name="email" onChange={handleChangeEmail}
                                value={email}
                                placeholder="Email"
                                style={isEmailAddressFilled && isEmailAddressValid ? {} : { border: "1.4px solid red" }}



                            />
                        </label>
                        {isEmailAddressFilled ? "" : invalidMessage}
                        {isEmailAddressValid ? "" : "Input a valid Email Address"}
                    </div>
                </div>
                {formSuccessful ? successMessage : ""}

                <div className="edit-warehouse__buttons">
                    <Link to={`/warehouses/${warehouseId}`}>
                        <div className="edit-warehouse__cancel-button"> Cancel</div>
                    </Link>

                    <button type="submit" className="edit-warehouse__submit-button">
                        Save
                    </button>
                </div>
            </form >

        </div >
    );
}

export default EditWarehousePage;