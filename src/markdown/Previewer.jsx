import React,{useState} from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import Toolbar from './Components/Toolbar';

const Previewer = ({ text }) => {
    const [screenToggle, setScreenToggle] = useState(false);
    const handleScreen = () => {
        setScreenToggle(!screenToggle);
    }
        
    return (
        <div  className={`preViewer ${screenToggle ? 'maximized': 'w-50'}`}>
            <Toolbar toolbar={'Previewer'} handleScreen={handleScreen} screenToggle={screenToggle} />
            <div id="preview"
                dangerouslySetInnerHTML={{
                  __html: marked(text),
                }}
            ></div>
        </div>
    )
}

const mapStateToProps = state => ({
    text : state
});

export default connect(mapStateToProps, null)(Previewer);