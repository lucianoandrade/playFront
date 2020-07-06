import React, {useState} from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import './styles.scss';

function SelectField (props) {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        props.onChange(selectedOption)
    };

    const customStyles = (width) => ({
        menu: styles => ({
            ...styles,
            backgroundColor: 'white',
            borderRadius: 'none',
            position: 'absolute',
            top: '37px',
            left: '1px',
            width: 'calc(100% - 1px)',
            height: 'fit-content',
            border: 'none',
            boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.3)',
            padding: '5px 0',
            marginTop: '12px'

        }),
        control: styles => ({ 
            ...styles, 
            backgroundColor: 'white',
            width: width,
            height: '50px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 'none',
            padding: '0 4px',
            boxShadow: '1px 1px 6px 0px rgba(193,193,193,1)',
            cursor: 'pointer'
        }),
        option: (styles, { isFocused, isSelected }) => {
            return {
                ...styles,
                padding: '10px 16px',
                backgroundColor: isFocused ? '#000' : null,
                color: isFocused ? 'white' : '#505050',
                ':hover': {
                    backgroundColor: '#000',
                    color: 'white',
                },
                fontSize: '14px',
                cursor: 'pointer'
            };
        },
        indicatorSeparator: styles => ({
            ...styles,
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '14px',
            color: '#000',
        }),
        singleValue: styles => ({
            ...styles,
            color: '#505050',
            fontSize: '14px'
        })
    });

    const dropdownIndicatorStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginRight: '10px'
    };

    const arrowLineStyleLeft = {
        display: 'block',
        width: '10px',
        height: '1px',
        backgroundColor: '#787878',
        transform: 'rotate(45deg)',
        position: 'relative',
        left: '2px'
    };

    const arrowLineStyleRight = {
        display: 'block',
        width: '10px',
        height: '1px',
        backgroundColor: '#787878',
        transform: 'rotate(-45deg)',
        position: 'relative',
        right: '1px'
    };

    const DropdownIndicator = ({ innerProps }) => {
        return (
            <div style={dropdownIndicatorStyle} {...innerProps}>
                <span style={arrowLineStyleLeft} />
                <span style={arrowLineStyleRight} />
            </div>
        );
    };
        
    return (
        <Select
            className={props.classNames}
            value = {selectedOption}
            onChange = {handleChange}
            isSearchable = {false}
            styles = {customStyles(props.width)}
            placeholder = {props.placeholder}
            options = {props.options}
            components={{ DropdownIndicator }}
            theme = {theme => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary: 'none'
                }
            })}
        />
    );
};

SelectField.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export default SelectField;