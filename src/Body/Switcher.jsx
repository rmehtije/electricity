import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ELE, GAS } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveEnergy } from '../services/stateService';

function Switcher() {
    const dispatch = useDispatch();
    const activeEnergy = useSelector((state) => state.activeEnergy);

    return (
        <ButtonGroup>
            <Button
                className="text-capitalize"
                variant="secondary"
                onClick={() => dispatch(setActiveEnergy(ELE))}
                active={activeEnergy === ELE}
            >{ELE}</Button>
            <Button
                className="text-capitalize"
                variant="secondary"
                onClick={() => dispatch(setActiveEnergy(GAS))}
                active={activeEnergy === GAS}
            >{GAS}</Button>
        </ButtonGroup>
    );
}

export default Switcher;
