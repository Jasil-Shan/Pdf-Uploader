import userModel from "../model/userModel.js";



export async function uploadPdf(req, res) {
    try {
        console.log(req.file, 'yfyfy');
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
        const _id = req.userId
        const pdf = await userModel.findById(_id, { pdfDetails: 1 });
        if (!pdf) {
            return res.status(404).json({ error: "User not found" });
        }
        const filePath = path.join(__dirname, 'path/to/pdf/storage', pdfDetails.fileName);
        res.sendFile(filePath);
        return res.json({ success: true, pdf })

    } catch (error) {
        res.json({ status: false, message: 'Network error' })
        console.error(error)
    }
}
