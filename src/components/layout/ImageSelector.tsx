import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import React from "react";
import { IImage } from "@/Interface/common.interface";

interface IModelSelector {
    images: IImage[],
    addImage: (data: IImage) => void,
    onSetTexture: (id: number) => void,
}

const ImageSelector: React.FC<IModelSelector> = ({ addImage, images, onSetTexture }) => {
    return <>
        <div className="flex w-64 flex-col border-l bg-background p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select Image</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
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
                        <DialogDescription>
                            <section className="w-full items-center">
                                <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden items-center">
                                    <div className="pt-4">
                                        <div id="image-preview" className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                                            <input id="upload" type="file" className="hidden" accept="image/*" />
                                            <label htmlFor="upload" className="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                </svg>
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                                                <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                                <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                                <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                                            </label>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <div className="w-full">
                                                <label className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                                                    <span className="text-center ml-2">Upload</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </DialogDescription>

                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-4 flex-1 overflow-auto">
                <div className="grid grid-cols-2 gap-4">
                    {
                        images.map((image: IImage) =>
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/20">
                                <img
                                    src={'/texture/' + image.path}
                                    alt="Image 1"
                                    width={300}
                                    height={300}
                                    className="h-full w-full object-cover"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-muted/50 opacity-0 transition-opacity hover:opacity-100">
                                    <Button variant="ghost" size="icon" className="text-foreground">
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
                                        <span className="sr-only">Select image</span>
                                    </Button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>;
};


ImageSelector.displayName = 'ImageSelector'
export default ImageSelector