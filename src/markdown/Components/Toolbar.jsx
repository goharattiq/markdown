import React from 'react';

const Toolbar = ({ toolbar,handleScreen,screenToggle }) => {
    return (
        <div className="bg-secondary">
            <i className="fab fa-free-code-camp p-2 fa-lg"></i>
            <h6 className='d-inline-block'>{toolbar}</h6>
            {
                !screenToggle ? <i className="fa fa-arrows-alt float-right p-2" onClick={handleScreen}></i>  : <i className="fa fa-compress float-right p-2" onClick={handleScreen}></i>   
            }
        </div>
    )
}

export default Toolbar;
