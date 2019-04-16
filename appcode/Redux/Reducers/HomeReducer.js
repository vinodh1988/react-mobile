

export let DataReducer= (state={items:["Pen","Paper"]},action)=>{
    switch(action.state){
        case 'DEFAULT_ACTION':
               return state;
        default:
            return state;
    }
}