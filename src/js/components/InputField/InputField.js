import React, { Component, PropTypes } from 'react';
import cx from './InputField.scss';

export default class InputField extends Component {

    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        value: PropTypes.string
    }

    static defaultProps = {
        className: '',
        placeholder: '',
        readOnly: false,
        value: ''
    }

    constructor(props) {
        super(props);
        this.value = props.value;
        this.state = {
            value: props.value
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value});
        this.value = nextProps.value;
    }

    render() {
        const { className, placeholder, readOnly, value, ...rest } = this.props;
        const inputValue = this.state.value;
        return (
            <div className={cx('input-field', className)}>
                <input
                    required
                    readOnly={readOnly}
                    className={cx('input')}
                    value={inputValue}
                    onChange={::this.handleTextChanged}
                    placeholder={placeholder}
                    {...rest}
                />
                <label className={cx('label')}>{placeholder}</label>
            </div>
        );
    }

    handleTextChanged(event) {
        this.setState({value: event.target.value});
        this.value = event.target.value;
    }
}
