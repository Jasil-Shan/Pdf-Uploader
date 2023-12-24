import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pdfFile: null,
    selectedPages: [],
};

const pdfUploadSlice = createSlice({
    name: 'pdfUpload',
    initialState,
    reducers: {
        uploadPdf: (state, action) => {
            state.pdfFile = action.payload;
            state.selectedPages = [];
        },
        selectPages: (state, action) => {
            state.selectedPages = action.payload;
        },
    },
});

export const {uploadPdf , selectPages} = pdfUploadSlice.actions
export default pdfUploadSlice.reducer