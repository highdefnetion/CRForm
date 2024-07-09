import React from 'react';

function AboutTheJob({ formData, setFormData }) {
    return (
        <div className="about-the-job-container">
            <h3>For new positions</h3>
            <p>There is no requirement to provide a draft job description when you submit this form. However, an understanding of the key responsibilities and knowledge/skills of the job will help us conduct effective follow up discussions with you. Please identify the key high level duties and responsibilities of the job (maximum 4000 characters)</p>
            <div className="form-group">
                <input type="text"
                    value={formData.duties_responsibilities}
                    onChange={(event) =>
                        setFormData({ ...formData, duties_responsibilities: event.target.value })} />
            </div>
            <p>Please identify the key high level skills and knowledge of the job (maximum 4000 characters)</p>
            <div className="form-group">
                <input type="text"
                    value={formData.skills}
                    onChange={(event) =>
                        setFormData({ ...formData, skills: event.target.value })} />
            </div>

            <h3>For updated positions and reclassifications</h3>
            <p>Please clearly articulate the key changes in job duties/job activities (maximum 4000 characters)</p>
            <div className="form-group">
                <input type="text"
                    value={formData.job_duties}
                    onChange={(event) =>
                        setFormData({ ...formData, job_duties: event.target.value })} />
            </div>

            <h3>For re-organization/creating a new organization</h3>
            <p>Please provide a short description of the organizational or job change, outlining impact to current program, number of positions that may be impacted and the details, such as number of positions to be created, number of job description to be updated, reclassified, and reporting relationship changes (maximum 4000 characters)</p>
            <div className="form-group">
                <input type="text"
                    value={formData.organizational_change_description}
                    onChange={(event) =>
                        setFormData({ ...formData, organizational_change_description: event.target.value })} />
            </div>
        </div>
    );
}

export default AboutTheJob;
