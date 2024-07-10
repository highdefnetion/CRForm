import React from 'react';

function SupportingDocuments({ formData, setFormData }) {
    return (
        <div className="supporting-documents-container">
            <h3>Attach supporting document:</h3>
            <p>Organizational chart: it is mandatory to attach a complete organizational chart (with position numbers, job titles, and existing job classification levels), see sample organizational chart for reference.</p>
            <p>Complete organizational chart is mandatory, with department number/s, position number/s and the classification levels. Insufficient information will delay the processing of the request.</p>
            <div className="form-group">
                <label htmlFor="file-upload" className="file-upload-label">
                    Choose File
                </label>
                <input type="file" id="file-upload" className="file-upload-input" />
                <button className="submit-button">Submit</button>
            </div>
            <p>Please provide business rationale supporting your request; for example, what is driving the need for the new position creation and/or update/review job description or reorganization.</p>
            <div className="form-group">
                <input type="text"
                    value={formData.business_rational}
                    onChange={(event) =>
                        setFormData({ ...formData, business_rational: event.target.value })} />
            </div>
        </div>
    );
}

export default SupportingDocuments;
