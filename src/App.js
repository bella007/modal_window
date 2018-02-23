import React from 'react';
import './css/App.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Field from './components/Field'
import { bindActionCreators } from 'redux';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import { addField, delField, changeField, submit } from './actions'

const mapStateToProps = state => {
    return {fields: state}
};

const mapDispatchToProps =(dispatch)=> {
    return bindActionCreators ({ addField, delField, changeField, submit}, dispatch)
};

const drop_menu_variables = ["1", "2", "3", "4", "5", "6", "7", "8"];

for (let i = 0; i < drop_menu_variables.length; i++ ) {
    drop_menu_variables[i]=<MenuItem value={i} key={i} primaryText={drop_menu_variables[i]} />
}
let changed_objects = []
class DialogModal extends React.Component {
    constructor(props) {
        super(props);
    };
    state = {
        open: false,
        num: this.props.fields

    };

    handleOnSubmit(e){
        e.preventDefault()
        this.props.submit(changed_objects)
        console.log('sunmit+changed_object',changed_objects)
    };

    takechanges =(k) => {
        changed_objects.push(k)
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = (e) => {
        e.preventDefault();
        console.log(this.props.fields)
        this.setState({open: false});
    };

    handleAddField = () => {
        let new_field={
            sel_field: 0,
            text_field: ''
        };
        this.props.addField(new_field)
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleOnSubmit.bind(this)}

            />,
        ];

        return (
            <div>
                <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    className="dialogWin"
                >
                    {this.props.fields.map((item,index)=>{ return <Field drop_menu={drop_menu_variables}
                                                                         index={index}
                                                                         key={index}
                                                                         delete={this.props.delField}
                                                                         changeField={this.props.changeField}
                                                                         item={item}
                                                                         takechanges={this.takechanges}/> })
                    }
                    <button onClick={this.handleAddField}>Добавить элемент</button>
                </Dialog>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);