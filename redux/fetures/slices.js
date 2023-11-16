import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: {
        count: 0 
    }
}

export const count = createSlice({
    name: 'count',
    initialState,
    reducers: {
        plusOne: (state, action) => {
            return {
                value: {
                    count: state.value.count + 1
                }
            }
        }
    }
})

export const { plusOne } = count.actions
export default count.reducer