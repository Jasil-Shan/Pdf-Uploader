import userModel from "../model/userModel.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export async function uploadPdf(req, res) {
    try {
        const pdf = req.file
        const _id = req.userId

        const user = await userModel.findByIdAndUpdate(
            _id,
            { $set: { pdfDetails: { fileName: pdf.originalname, path: pdf.path } } },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ success: true, user });

    } catch (error) {
        res.json({ status: false, message: 'Network error' })
        console.error(error)
    }
}



export async function getPdf(req, res) {
    try {
        const _id = req.userId;
        const { pdfDetails } = await userModel.findById(_id, { pdfDetails: 1 });

        if (!pdfDetails) {
            return res.status(404).json({ error: "User not found" });
        }


        const currentModulePath = fileURLToPath(import.meta.url);
        const currentModuleDir = dirname(currentModulePath);
        const filePath = path.join(currentModuleDir, '..', pdfDetails.path);
    
        res.sendFile(filePath);
    } catch (error) {
        res.json({ status: false, message: 'Network error' });
        console.error(error);
    }
}

