import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { ELE, CHART, PERIODS } from '../constants';

// redux eto tozhe samoe sostojanije kak i v reacte useState
// tol'ko rabotajet kak otdel'noe oblako.
// blagodorja jemu my mozhem peredavat' dannye v drugije komponenty kotorye nahodjatsa v drugoj vetke 
// ne zatragivaja svjaznye komponenty.

// kak i v ljobm sostojanii dolzhno bqt' iznachal'noe sostojanije. 
const initialState = {
    electricityPrice: null,
    activeEnergy: ELE,
    dataType: CHART,
    selectedPeriod: PERIODS[0].value,
    gasPrice: null,
    gasCurrentPrice: 0,
    errorMessage: null,
};

// izmenenije sostojanija v redux eto actions. 

export const setElectricityPrice = createAction('setElectricityPrice');
export const setActiveEnergy = createAction('setActiveEnergy');
export const setDataType = createAction('setDataType');
export const setSelectedPeriod = createAction('setSelectedPeriod');
export const setGasPrice = createAction('setGasPrice');
export const setGasCurrentPrice = createAction('setGasCurrentPrice');
export const setErrorMessage = createAction('setErrorMessage');

// v redux samoe izmenenije kotoroe dolzhno proizojti my sami opisyvajem v reducere.
// tojest' perenaznachenije sostojanija.

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setElectricityPrice, (state, action) => {
            // reducer eto funkcija kotoraja zapuskajetsa pri inicilizacii actions
            // reducer funkcija prinemajet v sebja dva argumenta
            // 1. vsjo nyneshnije sostojanie
            // 2. informaciju iz action. 4to javljajetsa objektom s dvumja svojstvami
                // 1. type = tip ili nazvanije actiona
                // 2. payload = data kotoruju my peredali v action
            state.electricityPrice = action.payload;
        })
        .addCase(setActiveEnergy, (state, action) => {
            state.activeEnergy = action.payload;
        })
        .addCase(setDataType, (state, action) => {
            state.dataType = action.payload;
        })
        .addCase(setSelectedPeriod, (state, action) => {
            state.selectedPeriod = action.payload;
        })
        .addCase(setGasPrice, (state, action) => {
            state.gasPrice = action.payload;
        })
        .addCase(setGasCurrentPrice, (state, action) => {
            state.gasCurrentPrice = action.payload;
        })
        .addCase(setErrorMessage, (state, action) => {
            state.errorMessage = action.payload;
        })
});

// oblako v kotorom hranitsa vsjo ob sostojanii nazyvajetsa store.
export const store = configureStore({ reducer });
