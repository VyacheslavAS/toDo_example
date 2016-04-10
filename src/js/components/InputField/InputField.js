import React, { Component, PropTypes } from 'react';
import cx from './InputField.scss';

export default class InputField extends Component {

    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool
    }

    static defaultProps = {
        className: '',
        placeholder: '',
        readOnly: false
    }

    constructor(props) {
        super(props);
        this.value = '';
        this.state = {
            value: ''
        };
    }

    render() {
        const { className, placeholder, readOnly, ...rest } = this.props;
        const { value } = this.state;
        return (
            <div className={cx('input-field', className)}>
                <input
                    required
                    readOnly={readOnly}
                    className={cx('input')}
                    value={value}
                    onChange={::this.handleTextChanged}
                    placeholder={placeholder}
                    { ...rest }
                />
                <label className={cx('label')}>{placeholder}</label>
            </div>
        );
    }

    handleTextChanged(event) {
        this.setState({value: event.target.value});
    }
}
