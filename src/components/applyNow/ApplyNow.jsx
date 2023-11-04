import React from "react";
import "./applynow.css"

export default function ApplyNow() {
    return (
        <div className="mfp-content">
            <div id="job-apply-internal-without-login-form-wrapper-4540" className="job-apply-email-form-wrapper">
                <div className="inner">
                    <h2 className="widget-title">
                        <span>Apply for this job</span>
                    </h2>
                    <div className="register-form-wrapper">
                        <div className="container-form">
                            <form
                                action=""
                                className="cmb-form"
                                method="post"
                                id="_candidate_register_fields_apply_apply"
                                encType="multipart/form-data"
                                encoding="multipart/form-data"
                            >

                                <div className="cmb2-wrap form-table">
                                    {/* Your form fields and labels go here */}
                                    {/* For example, the email field */}
                                    <div className="cmb-row cmb-type-text cmb2-id--candidate-email table-layout" data-fieldtype="text">
                                        <div className="cmb-th">Email <span className="required">*</span></div>
                                        <div className="cmb-td">
                                            <input type="email"
                                                placeholder="Email"

                                            />
                                        </div>
                                    </div>
                                    {/* End of form fields */}
                                </div>
                                <input type="hidden" className="cmb2-hidden" name="post_type" id="post_type" value="candidate" />
                                <div className="form-group">
                                    <label htmlFor="register-terms-and-conditions">
                                        <input type="checkbox" name="terms_and_conditions" value="on" id="register-terms-and-conditions" required />
                                        You accept our <a href="https://apusthemes.com/wp-demo/superio/terms/">Terms and Conditions and Privacy Policy</a>
                                    </label>
                                </div>
                                <button className="button-primary">Apply now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
