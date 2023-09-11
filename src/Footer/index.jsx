import { useState } from 'react';
import Periods from "./Periods";
import SideBar from './SideBar';
import DataSwitcher from './DataSwitcher';

function Footer(props) {

    // useState - react hook kotoryj inicializirujet sostojanie komponenta. 
    // useStete vozvrashajet massive iz dvuh elementov. 
    // 1. peremennaja kotoraja derzhyt v sebe znachenije 
    // 2. funkcija kotoraja menjajet eto znachenija
    // pri zapuski funkcii smeny sostojanija komponent perezapuskajetsa/render

    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <DataSwitcher {...props}/>
            <Periods setShowSideBar={setShowSideBar} {...props}/>
            <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} {...props}/>
        </>
    );
}

export default Footer;
