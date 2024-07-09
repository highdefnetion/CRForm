import React from 'react';

function Authorization({ formData, setFormData }) {
    return (
        <div className="authorization-container">
            <h3>Authorization</h3>
            <p>I authorize the classification request and confirm there is associated funding.</p>
            <div className="form-group">
                <label>Contact Person<span className="required-asterisk">*</span></label>
                <select
                    value={formData.contact_person}
                    onChange={(event) =>
                        setFormData({ ...formData, contact_person: event.target.value })} >
                    <option value="">Select Contact Person</option>
                    <option>Manager</option>
                </select>
            </div>
            <div className="form-group">
                <label>Last Name<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.cp_last_name}
                    onChange={(event) =>
                        setFormData({ ...formData, cp_last_name: event.target.value })} />
            </div>
            <div className="form-group">
                <label>First Name<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.cp_first_name}
                    onChange={(event) =>
                        setFormData({ ...formData, cp_first_name: event.target.value })} />
            </div>
            <div className="form-group">
                <label>Telephone Number<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.cp_telephone_number}
                    onChange={(event) =>
                        setFormData({ ...formData, cp_telephone_number: event.target.value })} />
            </div>
            <div className="form-group">
                <label>Email Address<span className="required-asterisk">*</span></label>
                <input type="text"
                    value={formData.cp_email_address}
                    onChange={(event) =>
                        setFormData({ ...formData, cp_email_address: event.target.value })} />
            </div>
            <div className="form-group">
                <label>Date of Submission<span className="required-asterisk">*</span></label>
                <input type="text"
                    placeholder="mm/dd/yyyy"
                    value={formData.date_of_submission}
                    onChange={(event) =>
                        setFormData({ ...formData, date_of_submission: event.target.value })} />
            </div>
        </div>
    );
}

export default Authorization;
