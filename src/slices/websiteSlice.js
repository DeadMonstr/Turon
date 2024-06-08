import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += action.payload.number
        },
        decremented:  (state,action) => {
            state.value -= action.payload.number
        }
    }
})

const {reducer,actions} = counterSlice

export const { incremented, decremented } = actions
export default reducer