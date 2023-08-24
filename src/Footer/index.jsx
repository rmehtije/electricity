import { useState } from 'react';
import Periods from "./Periods";
import SideBar from './SideBar';

function Footer() {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <Periods setShowSideBar={setShowSideBar} />
            <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} />
        </>
    );
}

export default Footer;
