const state={
    employeeList:[],
    count:0
}

function employeeReducer(mstate ={...state}, action){
    switch(action.type){

        default:
        return{...mstate};
    }
}

export default employeeReducer;