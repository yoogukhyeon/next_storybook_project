import React, { useState, ChangeEvent } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { styled } from 'styled-components';

type IsChecked = {
  editor: boolean;
  original: boolean;
};

interface IProps {
  isChecked: IsChecked;
  onCheckChange: () => void;
  onOptionClick: () => void;
}

function Pdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string>('');

  const allowedFiles = ['application/pdf'];
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    let selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError('');
          setPdfFile(e.target?.result as string);
        };
      } else {
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile(null);
      }
    } else {
      console.log('please select a PDF');
    }
  };

  return (
    <Wrap className="container">
      <form>
        <label>
          <h5>Upload PDF</h5>
        </label>
        <br />
        <input type="file" className="form-control" onChange={handleFile} />
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>

      <h5>View PDF</h5>
      <div className="viewer">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}

        {!pdfFile && <>No file is selected yet</>}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  border: 1px solid #222;
  height: 100vh;

  form {
    margin: 30px 0px;
  }

  .viewer {
    background-color: #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow-y: auto;
    margin-bottom: 10px;
  }

  span {
    margin-top: 3px;
  }
`;

export default Pdf;
