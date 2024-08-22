import { IImage } from '@/Interface/common.interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IImageSlice {
    activeImage?: IImage | null,
    imageList: IImage[],
}

const initialState: IImageSlice = {
    activeImage: null,
    imageList: [
        {
            id: 1,
            name: "texture1",
            path: "/textures/texture1.jpg",
            aspactRation: "1:1"
        },
        {
            id: 2,
            name: "texture2",
            path: "/textures/texture2.jpg",
            aspactRation: "1:1"
        },
        {
            id: 3,
            name: "texture3",
            path: "/textures/texture3.jpg",
            aspactRation: "1:1"
        },
        {
            id: 4,
            name: "texture4",
            path: "/textures/texture4.jpg",
            aspactRation: "1:1"
        },
        {
            id: 5,
            name: "texture5",
            path: "/textures/texture5.jpg",
            aspactRation: "1:1"
        },
        {
            id: 6,
            name: "texture6",
            path: "/textures/texture6.jpg",
            aspactRation: "1:1"
        },
        {
            id: 7,
            name: "texture7",
            path: "/textures/texture7.jpg",
            aspactRation: "1:1"
        },
        {
            id: 8,
            name: "texture8",
            path: "/textures/texture8.jpg",
            aspactRation: "1:1"
        },
        {
            id: 9,
            name: "texture9",
            path: "/textures/texture9.jpg",
            aspactRation: "1:1"
        },
        {
            id: 10,
            name: "texture10",
            path: "/textures/texture10.jpg",
            aspactRation: "1:1"
        },
        {
            id: 11,
            name: "texture11",
            path: "/textures/texture11.jpg",
            aspactRation: "1:1"
        }
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
                path: payload.dataURL,
                aspactRation: "1:1"
                // aspactRation: payload.aspactRation
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