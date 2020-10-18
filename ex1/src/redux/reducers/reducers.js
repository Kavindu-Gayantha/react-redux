const initialState={
    count:"0",
}

export default function(state=initialState,actions) {
    switch(actions.type){
        case 'PLUS':{
            const {count} = actions.payload;
            
            return {
                ...state,count:count+1
            };

        };break;

        case 'MINUS':{
            const {count} = actions.payload;

            return {
                ...state,count:count-1
            }

        };break;
        default:{
            return state;
        } ;
    }
    
}