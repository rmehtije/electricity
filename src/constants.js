import moment from 'moment';

export const ELE = 'electricity';
export const GAS = 'gas';
export const CHART = 'chart';
export const TABLE = 'table';
export const NOW_TIMESTAMP = moment().startOf('hour').unix();
export const LOW_ELE_PRICE = 120;
export const mainUrl = '/electricity';
const label = {
    [ELE]: 'days',
    [GAS]: 'months',
};
export const PERIODS = [
    {
        label,
        value: 1,
    },
    {
        label,
        value: 2,
    },
];
