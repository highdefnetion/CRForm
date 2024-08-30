import React, { useState } from 'react';
import Service from './Service';
import PositionInfo from './PositionInfo';
import AboutTheJob from './AboutTheJob';
import HRContact from './HRContact';
import SupportingDocuments from './SupportingDocuments';
import Authorization from './Authorization';
import '..App.css';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        position_number: "",
        ministry: "",
        ministry_code: "",
        division: "",
        branch: "",
        department_description: "",
        department_number: "",
        position_title: "",
        job_code_for_existing_position: "",
        position_status: "",
        number_of_positions: "",
        designated_bilingual_position: "",
        duties_responsibilities: "",
        skills: "",
        job_duties: "",
        organizational_change_description: "",
        organizational_chart: "",
        business_rational: "",
        hr_contact: "",
        last_name: "",
        first_name: "",
        telephone_number: "",
        email_address: "",
        contact_person: "",
        cp_last_name: "",
        cp_first_name: "",
        cp_telephone_number: "",
        cp_email_address: "",
        date_of_submission: "",
    });

    const FormTitles = ["Service", "Position Information", "About the Job", "HR Contact", "Authorization", "Supporting Document"];

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <Service formData={formData} setFormData={setFormData} />;
            case 1:
                return <Authorization formData={formData} setFormData={setFormData} />;    
            case 2:
                return <PositionInfo formData={formData} setFormData={setFormData} />;
            case 3:
                return <AboutTheJob formData={formData} setFormData={setFormData} />;
            case 4:
                return <SupportingDocuments formData={formData} setFormData={setFormData} />;
            case 5:
                return <HRContact formData={formData} setFormData={setFormData} />;
            default:
                return null;
        }
    };

    const SubmitButtonDisplay = () => {
        return page === FormTitles.length - 1 ? "Submit" : "Next";
    };

    const getProgressBarWidth = () => {
        const progressPercentage = (page + 1) / FormTitles.length * 100;
        return `${progressPercentage}%`;
    };

    return (
        <div className='form'>
            <div className="header-section">
                <div className="logo">
                    <img src="https://ontariogov-my.sharepoint.com/:i:/r/personal/defne_yildirim_ontario_ca/Documents/Desktop/classification%20request%20form/ON_REV_LOGO_RED_RGB.PNG?csf=1&web=1&e=3ze3Xa" alt="Ontario Logo" />
                </div>
                <div className="header-text">
                    <h1>Treasury Board Secretariat</h1>
                    <h2>Job Evaluation Initiatives Branch</h2>
                </div>
            </div>
            <div className="instructions-section">
                <h3>Instructions</h3>
                <div className="instructions-columns">
                    <div className="instructions-column">
                        <p>If you would like to have an initial consultation with your Job Evaluation (JE) Specialist before submitting this form, select one of the Consultation Services from the ‘Select a Service’ drop-down menu below. Click on the ‘submit’ button and your JE Specialist will contact you within 3 business days. If you have further questions in filling out the form, please refer to the <a href="#">User Guide</a>. After submission, you will receive a confirmation email with a tracking number.</p>
                    </div>
                    <div className="instructions-column">
                        <p>If you would like to submit a classification request, select the ‘Submit a Classification Request’ option from the ‘Select a service’ drop-down menu below. Complete the mandatory fields wherever applicable and attach the required documents. Once completed, click on the ‘submit’ button and your JE Specialist will contact you within 3 business days to discuss your request. After submission, you will receive a confirmation email with a tracking number.</p>
                    </div>
                </div>
            </div>
            <div className='form-container'>
                <div className='body'>{PageDisplay()}</div>
                <div className="button-container">
                    <button
                        className="previous-button"
                        disabled={page === 0}
                        onClick={() => setPage((currPage) => currPage - 1)}
                    >
                        Previous
                    </button>
                    <button
                        className="next-button"
                        onClick={() => setPage((currPage) => currPage + 1)}
                    >
                        {SubmitButtonDisplay()}
                    </button>
                </div>
                <div className='progressbar'>
                    <div className="progress" style={{ width: getProgressBarWidth() }}>
                        <span className="progress-text">{Math.round((page + 1) / FormTitles.length * 100)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
