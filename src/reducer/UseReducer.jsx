export const initialState=null;//null=0=false




export const reducer=(state,action)=>{//on based of action we change state
    if(action.type==="USER")
    {
        return action.payload;
    }
    return state;

}