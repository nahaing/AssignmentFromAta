import {ADD_EMPLOYEE} from './types';

export const addEmployee = (emp) =>{
    const state={
        type: ADD_EMPLOYEE,
        value: emp
    }
    return state;
}