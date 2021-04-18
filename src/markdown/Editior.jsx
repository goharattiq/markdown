import React,{useState} from 'react';
import { connect } from 'react-redux';
import {setText} from '../redux/markdown/action';
import Toolbar from './Components/Toolbar';

const Editior = ({ text,setText }) => {
    const [screenToggle, setScreenToggle] = useState(false);
    const handleScreen = () => {
        setScreenToggle(!screenToggle);
    }
    return (
        <div className={`editorWrap ${screenToggle ? 'maximized': 'w-50'}`}>
            <Toolbar toolbar={'Editor'} handleScreen={handleScreen} screenToggle={screenToggle} />
            <textarea id="editor" type="text" className='w-100 mt-0' rows={`${screenToggle ? '30': '10'}`} value={text} onChange={(event)=> {
                setText(event.target.value)
            }}>
            </textarea>
        </div>
    )
}

const mapStateToProps = state => ({
    text : state
});

const mapDispatchToProps = dispatch => ({
    setText: text => dispatch(setText(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Editior);