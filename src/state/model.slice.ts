import { IModel } from '@/Interface/common.interface'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IModelSlice {
    activeModel?: IModel | null,
    modelList: IModel[],
}

const initialState: IModelSlice = {
    activeModel: null,
    modelList: [
        {
            id: 1,
            name: "Hospital",
            path: "models/hospital.glb"
        },
        {
            id: 2,
            name: "Dining Room",
            path: "models/dining_room.glb"
        },
        {
            id: 3,
            name: "Living Room",
            path: "models/living_room.glb"
        },
    ]

}

export const modelSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setActiveModel: (state, { payload }: PayloadAction<IModel>) => {
            state.activeModel = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setActiveModel } = modelSlice.actions

export default modelSlice.reducer