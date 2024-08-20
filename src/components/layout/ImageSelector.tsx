import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { IImage } from "@/Interface/common.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { addImage, setActiveImage } from "@/state/image.slice";

interface IModelSelector {
}

const ImageSelector: React.FC<IModelSelector> = () => {

    const images = useSelector((state: RootState) => state.images.imageList)
    const dispatch = useDispatch()

    const [open, setOpen] = useState<boolean>(false);
    const [base64Image, setBase64Image] = useState('');


    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setBase64Image(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = () => {
        dispatch(addImage({ dataURL: base64Image, name: "testImage" }))
        setOpen(false)
    }

    return <>
        <div className="flex sm:w-64 flex-col border-l bg-background p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select Image</h2>
                <Dialog open={open}>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(true)} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                            <span className="sr-only">Add image</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Uplaod Image</DialogTitle>
                        </DialogHeader>
                        <div className="w-full items-center">
                            <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden items-center">
                                <div className="pt-4">
                                    <div id="image-preview" className="max-w-sm p-3 sm:p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                                        {base64Image ? (
                                            <div className="flex items-center justify-center">
                                                <div className="relative">
                                                    <Button onClick={() => setBase64Image("")} variant="default" className="h-6 p-0 w-6 absolute right-2 top-2 origin-center" >
                                                        <svg
                                                            className="rotate-45"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="M12 5v14" />
                                                        </svg>
                                                        <span className="sr-only">Add image</span>
                                                    </Button>
                                                    <img src={base64Image} alt="Uploaded" className="w-[200px] rounded-md border-slate-800 aspect-square" />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <input id="upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                                <label htmlFor="upload" className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                    </svg>
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                                                    <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                                    <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                                                </label></>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="w-full">
                                            <Button className="w-full" onClick={uploadImage} >
                                                <span className="text-center ml-2">Upload</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DialogDescription>
                        </DialogDescription>

                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-4 flex-1 overflow-auto">
                <div className=" flex overflow-scroll sm:overflow-hidden gap-3 sm:grid grid-cols-2 gap-4">
                    {
                        images.map((image: IImage) =>
                            <button onClick={() => dispatch(setActiveImage(image))} key={image.id} className="relative aspect-square overflow-hidden rounded-lg bg-muted/20">
                                <img
                                    src={image.path}
                                    alt={image.name}
                                    className="h-[80px] object-cover aspect-square flex items-center justify-center "
                                />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    </>;
};


ImageSelector.displayName = 'ImageSelector'
export default ImageSelector