import { IImage } from '@/Interface/common.interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IImageSlice {
    activeImage?: IImage | null,
    imageList: IImage[],
}

const initialState: IImageSlice = {
    activeImage: null,
    imageList: [{
        id: 1,
        name: "texture1",
        path: "/textures/texture1.jpg"
    },
    {
        id: 2,
        name: "texture2",
        path: "/textures/texture2.jpg"
    },
    ]

}

export const iamgeSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage: (state, { payload }: PayloadAction<{ dataURL: string, name: string }>) => {
            const _newImage: IImage = {
                id: state.imageList.length + 1,
                name: payload.name,
                path: payload.dataURL
            }
            state.imageList = [...state.imageList, _newImage]
        },
        setActiveImage: (state, { payload }: PayloadAction<IImage>) => {
            state.activeImage = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addImage, setActiveImage } = iamgeSlice.actions

export default iamgeSlice.reducer