import React from 'react';

const Dashboardlayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <div>this is navbar</div>
            <div>{children}</div>
        </div>
    );
};

export default Dashboardlayout;