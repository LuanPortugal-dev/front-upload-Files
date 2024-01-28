import React, { useState, useRef } from 'react';

import {uploadFiles} from '../../backend'

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const inputEmail = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile!);
        formData.append("email", inputEmail.current?.value!)
        const response  = await uploadFiles(formData)

        if (response.status === 200) {
            alert('Seus dados serão enviados para o seu email!!')
        }
    };

    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            <div className="header mb-6 bg-red-500">
                <h2 className="text-2xl font-bold text-center">d</h2>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    ref={inputEmail}
                    placeholder="Digite o seu e-mail..."
                    className="block w-full px-4 py-2 text-sm text-slate-500 border rounded"
                />
            </div>

            <div className="flex justify-center items-center">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500
                        file:mx-auto file:my-2 file:py-2 file:px-4
                        file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100"
                />
            </div>

            <div className="mt-6">
                <button
                    onClick={handleUpload}
                    disabled={!selectedFile}
                    className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 disabled:bg-blue-300"
                >
                    Fazer Upload
                </button>
            </div>
        </div>
    );

};

export default FileUpload;
