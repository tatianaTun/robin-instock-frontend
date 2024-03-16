import searchIcon from '../../assets/Icons/search-24px.svg';
import './FormFields.scss';

export function SearchField() {
    return (
        <div className='search-bar'>
            <input className="form-input" type="search" placeholder="Search..." />
            <img className='search-bar__icon' src={searchIcon} alt="Search" />
        </div>
    )
}