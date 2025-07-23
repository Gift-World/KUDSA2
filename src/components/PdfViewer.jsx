import { useState } from 'react';
import { BookOpen, Download, ExternalLink, X } from 'lucide-react';

const PdfViewer = ({
                       pdfUrl = '/book-of-abstracts.pdf',
                       title = 'Book of Abstracts'
                   }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPDFInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'book-of-abstracts.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Compact PDF Card */}
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* PDF Preview/Icon Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-center relative">
                    <div className="absolute top-4 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full">
                        14 Pages
                    </div>

                    {/* PDF Icon/Preview */}
                    <div className="w-20 h-24 mx-auto mb-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        "Bringing together student leaders, researchers, and
                        administrators to shape the future of student affairs
                        across Africa."
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="p-6 space-y-3">
                    <button
                        onClick={openPDFInNewTab}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                    >
                        <ExternalLink className="w-5 h-5" />
                        View Book of Abstracts
                    </button>

                    <button
                        onClick={downloadPDF}
                        className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <Download className="w-5 h-5" />
                        Download PDF
                    </button>
                </div>

                {/* Footer Info */}
                <div className="px-6 pb-6">
                    <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            PDF Format
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            14 Pages
                        </div>
                        {/*<div className="flex items-center gap-1">*/}
                        {/*    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>*/}
                        {/*    High Quality*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            {/* Modal for Embedded PDF View */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={openPDFInNewTab}
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Open in New Tab
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Embed */}
                        <div className="flex-1 p-6">
                            <iframe
                                src={pdfUrl}
                                className="w-full h-full rounded-lg shadow-inner"
                                title={title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PdfViewer;