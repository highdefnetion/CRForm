import React from 'react';

function HRContact({ formData, setFormData }) {
    return (
        <div className="hr-contact-container">
            <h3>HR Contact</h3>
            <p>I authorize the classification request and confirm there is associated funding</p>
            <div className="form-group">
                <label>HR Contact<span className="required-asterisk">*</span></label>
                <select
                    value={formData.hr_contact}
                    onChange={(event) =>
                        setFormData({ ...formData, hr_contact: event.target.value })} >
                    <option value="">Select HR Contact</option>
                    <option>HR Advisor</option>
                </select>
            </div>
            <div className="form-group">
                <label>Last Name<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.last_name}
                    onChange={(event) =>
                        setFormData({ ...formData, last_name: event.target.value })} />
            </div>
            <div className="form-group">
                <label>First Name<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.first_name}
                    onChange={(event) =>
                        setFormData({ ...formData, first_name: event.target.value })} />
            </div>
            <div className="form-group">
                <label>Telephone Number<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.telephone_number}
                    onChange={(event) =>
                        setFormData({ ...formData, telephone_number: event.target.value })} />
            </div>
            <div className="form-group">
                <label>Email Address<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.email_address}
                    onChange={(event) =>
                        setFormData({ ...formData, email_address: event.target.value })} />
            </div>
        </div>
    );
}

export default HRContact;
