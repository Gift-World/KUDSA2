import 'react';
import PDFViewer from './PdfViewer';

function Abstracts() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">International Multidisciplinary
                    Student Affairs Conference</h1>
                <p className="text-xl text-gray-600">'Building Inclusive and Innovative
                    Future Student Communitie</p>
            </div>

            {/* PDF Viewer Component */}
            <PDFViewer
                pdfUrl="/book-of-abstracts.pdf"
                title="Book of Abstracts"
            />
        </div>
    );
}

export default Abstracts;