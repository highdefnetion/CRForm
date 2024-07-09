import React, { useState } from 'react';

function ConsultationService() {
    const [formData, setFormData] = useState({
        ministry: "",
        last_name: "",
        first_name: "",
        telephone_number: "",
        email_address: "",
        hr_contact: "",
        hr_last_name: "",
        hr_first_name: "",
        hr_telephone_number: "",
        hr_email_address: "",
        issues: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="consultation-service-container">
            <h2>Consultation Service</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Ministry<span className="required-asterisk">*</span></label>
                    <select
                        value={formData.ministry}
                        onChange={(event) => setFormData({ ...formData, ministry: event.target.value })}
                        required
                    >
                        <option value="">Select Ministry</option>
                        <option>Cabinet Office</option>
                        <option>Ministry of Agriculture, Food and Rural Affairs</option>
                        <option>Ministry of Children, Community and Social Services</option>
                        <option>Ministry of Citizenship and Multiculturalism</option>
                        <option>Ministry of Colleges and Universities</option>
                        <option>Ministry of Economic Development, Job Creation and Trade</option>
                        <option>Ministry of Education</option>
                        <option>Ministry of Energy</option>
                        <option>Ministry of Finance</option>
                        <option>Ministry of Francophone Affairs</option>
                        <option>Ministry of Health</option>
                        <option>Ministry of Indigenous Affairs</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Last Name<span className="required-asterisk">*</span></label>
                    <input
                        type="text"
                        value={formData.last_name}
                        onChange={(event) => setFormData({ ...formData, last_name: event.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>First Name<span className="required-asterisk">*</span></label>
                    <input
                        type="text"
                        value={formData.first_name}
                        onChange={(event) => setFormData({ ...formData, first_name: event.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Telephone Number</label>
                    <input
                        type="text"
                        value={formData.telephone_number}
                        onChange={(event) => setFormData({ ...formData, telephone_number: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Email Address<span className="required-asterisk">*</span></label>
                    <input
                        type="email"
                        value={formData.email_address}
                        onChange={(event) => setFormData({ ...formData, email_address: event.target.value })}
                        required
                    />
                </div>
                <p>A JE Specialist may engage your Human Resources (HR) Advisor or Strategic Business Unit (SBU) Advisor in the classification process. Please provide their contact information.</p>
                <div className="form-group">
                    <label>HR Contact</label>
                    <select
                        value={formData.hr_contact}
                        onChange={(event) => setFormData({ ...formData, hr_contact: event.target.value })}
                    >
                        <option value="">Select HR Contact</option>
                        <option>HR Advisor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={formData.hr_last_name}
                        onChange={(event) => setFormData({ ...formData, hr_last_name: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={formData.hr_first_name}
                        onChange={(event) => setFormData({ ...formData, hr_first_name: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Telephone Number</label>
                    <input
                        type="text"
                        value={formData.hr_telephone_number}
                        onChange={(event) => setFormData({ ...formData, hr_telephone_number: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        value={formData.hr_email_address}
                        onChange={(event) => setFormData({ ...formData, hr_email_address: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Please outline below what questions and/or issues you have. This will help the JE specialist to prepare for your consultation. Please note, a classification request may be required following the consultation.<span className="required-asterisk">*</span></label>
                    <textarea
                        value={formData.issues}
                        onChange={(event) => setFormData({ ...formData, issues: event.target.value })}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ConsultationService;
