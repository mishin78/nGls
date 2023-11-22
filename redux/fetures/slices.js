import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: {
        level: 'A1'
    }
}

export const levels = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        changeLevel: (state, action) => {
            return {
                value: {
                    level: action
                }
            }
        }
    }
})

export const { changeLevel } = levels.actions
export default levels.reducer