import { useEffect, useState } from 'react';
import { NOW_TIMESTAMP, ELE } from '../constants';
import { useSelector } from 'react-redux';

function Price() {
    const electricityPrice = useSelector((state) => state.electricityPrice);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const [currentPrice, setCurrentPrice] = useState(0);

    // useEffect eto react hukk kotoryj zapuskajetsa posle togo kak komponent zakonchil svoj render
    // useEffect prinemajet v sebja dva argumenta
    // 1. Funkcija kotoraja nuhzno zapustit'
    // 2. Eto massive zavisimostej
    // useEffect sledit za zavisimostjami i pri izmenij ih znachenija on perezapuskajet peredannuju jemu funkcija
    // useEffect my ispolzujem naprimer dlja poluchenija dannyh vnutri komponenta 4toby imet' kontrol' nad 
    // zaprosom. Izbezhat' lishnije zaprosy pri kazhdoj otrisovki komponenta.
    useEffect(() => {

        if (!electricityPrice) return;

        const current = electricityPrice.ee.find(item => item.timestamp === NOW_TIMESTAMP);

        setCurrentPrice(current?.price || 0);

    }, [electricityPrice]);

    return (
        <>
            <h2>{activeEnergy === ELE ? currentPrice : parseFloat(gasCurrentPrice).toFixed(2)}</h2>
            <div>sents/kw</div>
        </>
    );
}

export default Price;
