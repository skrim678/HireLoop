import React from 'react';
import { Sidebar } from '../component/Dashboards/Sidebar';

const DashBoardLayout = ({children}) => {
    return (
        <>
        <Sidebar></Sidebar>
        <div>
            {children}
        </div></>
        
    );
};

export default DashBoardLayout;