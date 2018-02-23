import React from 'react';
import '../css/App.css';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import {red500} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
    marginRight: 24,
};

const DeleteIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41
        10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </SvgIcon>
);

export default class Field extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        value: this.props.item.sel_field,
        txt_val:0
    };

    handleChange = (event, index, value) => {

        this.setState({value}) ;
        this.ch(value);
    };

    ch = () => {
        // let value = val || this.state.value;

        this.state.txt_val = this.refs.num.getValue()
        let k = {ind:this.props.index,
                 sel_field: this.state.value,
                 text_field: this.refs.num.getValue()};
        console.log('k',k)

        this.props.takechanges(k)
    };

    render() {

        return (
            <div className="field">
                {console.log('element:',this.props.index,'store', this.props.item.sel_field)}
                {console.log('element:',this.props.index,'state',this.state.value)}
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    maxHeight={200}
                    className="sel" >
                    {this.props.drop_menu}
                    {/*{items}*/}
                </SelectField>
                <TextField
                    type="number"
                    className="txt"
                    name="comp"
                    defaultValue={this.props.item.text_field ||this.state.txt_val}
                    onChange={this.ch}
                    ref='num' />
                {this.props.index}
                <DeleteIcon style={iconStyles} color={red500} className="hh" onClick={() =>
                {return this.props.delete(this.props.index)}} />
            </div>

        );
    }
}
