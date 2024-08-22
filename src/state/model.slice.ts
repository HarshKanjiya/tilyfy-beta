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
            name: "Dining Room 1",
            path: "models/dining_room1.glb",
            floorTextureName: "floor"
        },
        {
            id: 2,
            name: "Dining Room 2",
            path: "models/dining_room2.glb",
            floorTextureName: "Modern_Dining_Room"
        },
        {
            id: 3,
            name: "Living room",
            path: "models/living_room.glb",
            floorTextureName: "floor"
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