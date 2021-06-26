export const initialState = {
    roomId: "",
}

const reducer = (state, action) => {
    switch(action.type)
    {
        case "SET_ROOM_ID":
            return{
                ...state,
                roomId: action.roomId,
            }
    }
}

export default reducer;