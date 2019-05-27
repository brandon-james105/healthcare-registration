import React from "react";
import { Field, Section, Container, Control, Input, Button } from "reactbulma";
import Checkmark from "./Checkmark";

class HealthcareRegistrationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {},
      errors: {},
      submissionSuccessful: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHealthRegistrationForm = this.submitHealthRegistrationForm.bind(
      this
    );
  }

  componentDidMount() {
    // On a refresh, restore the items back to their previous state
    const sessionStorageValues = JSON.parse(
      window.sessionStorage.getItem("formContent")
    );
    if (sessionStorageValues) {
      this.setState(sessionStorageValues);
    }
  }

  luhnValidate(npi) {
    var tmp, sum, i, j;
    i = npi.length;
    if (i === 15 && npi.indexOf("80840", 0, 5) === 0) sum = 0;
    else if (i === 10) sum = 24;
    else return false;
    j = 0;
    while (i !== 0) {
      tmp = npi.charCodeAt(i - 1) - "0".charCodeAt(0);
      if (j++ % 2 !== 0) {
        if ((tmp <<= 1) > 9) {
          tmp -= 10;
          tmp++;
        }
      }
      sum += tmp;
      i--;
    }
    if (sum % 10 === 0) return true;
    else return false;
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    let justFields = { fields };
    window.sessionStorage.setItem("formContent", JSON.stringify(justFields));
  }

  submitHealthRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {
        fullName: "",
        npiNumber: "",
        businessAddress: "",
        phoneNumber: "",
        email: "",
        emailConfirm: ""
      };
      this.setState({ submissionSuccessful: true, fields: fields });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fullName"]) {
      formIsValid = false;
      errors["fullName"] = "Please enter your full name.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Please enter your email address.";
    }

    if (!fields["businessAddress"]) {
      formIsValid = false;
      errors["businessAddress"] = "Please enter your business address.";
    }

    if (
      typeof fields["email"] !== "undefined" &&
      typeof fields["emailConfirm"] !== "undefined"
    ) {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "Please enter a valid email.";
      }

      if (!pattern.test(fields["emailConfirm"])) {
        formIsValid = false;
        errors["emailConfirm"] = "Please enter a valid email.";
      }

      if (fields["email"] !== fields["emailConfirm"]) {
        errors["emailConfirm"] = "This email does not match.";
      }
    }

    if (!fields["npiNumber"]) {
      formIsValid = false;
      errors["npiNumber"] = "Please enter your NPI Number.";
    }

    if (typeof fields["npiNumber"] !== "undefined") {
      if (!this.luhnValidate(fields["npiNumber"])) {
        formIsValid = false;
        errors["npiNumber"] = "Please enter a valid NPI number.";
      }
    }

    if (!fields["phoneNumber"]) {
      formIsValid = false;
      errors["phoneNumber"] = "Please enter your phone number.";
    }

    if (typeof fields["phoneNumber"] !== "undefined") {
      if (!fields["phoneNumber"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phoneNumber"] = "Please enter a valid phone number.";
      }
    }

    this.setState({
      errors: errors
    });
    window.sessionStorage.setItem("formContent", "{}");
    return formIsValid;
  }

  render() {
    return (
      <Section>
        <Container id="register">
          <div
            className={
              this.state.submissionSuccessful
                ? "submission-overlay is-overlay"
                : "is-hidden"
            }
          >
            <Checkmark animating={this.state.submissionSuccessful} />
            <p className="has-text-centered">
              Your information was successfully submitted. You will receive an
              email shortly with confirmation.
            </p>
          </div>
          <div className="columns">
            <div className="column is-one-third is-fullheight">
              <div className="form-accent is-fullheight" />
            </div>
            <div className="column is-two-thirds">
              <div className="columns">
                <form
                  className="column is-half is-offset-one-quarter"
                  method="post"
                  onSubmit={this.submitHealthRegistrationForm}
                >
                  <Section>
                    <Field>
                      <label className="label has-text-left" htmlFor="email">
                        Email
                      </label>
                      <Control>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={this.state.fields.email || ""}
                          onChange={this.handleChange}
                        />
                        <p
                          className="has-text-danger"
                          hidden={!this.state.errors.email}
                        >
                          {this.state.errors.email}
                        </p>
                      </Control>
                    </Field>
                    <Field>
                      <label
                        className="label has-text-left"
                        htmlFor="email-confirm"
                      >
                        Email (confirm)
                      </label>
                      <Control>
                        <Input
                          id="email-confirm"
                          name="emailConfirm"
                          type="email"
                          placeholder="Email (confirm)"
                          value={this.state.fields.emailConfirm || ""}
                          onChange={this.handleChange}
                        />
                        <p
                          className="has-text-danger"
                          hidden={!this.state.errors.emailConfirm}
                        >
                          {this.state.errors.emailConfirm}
                        </p>
                      </Control>
                    </Field>
                    <Field>
                      <label
                        className="label has-text-left"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <Control>
                        <Input
                          id="full-name"
                          name="fullName"
                          placeholder="Full Name"
                          value={this.state.fields.fullName || ""}
                          onChange={this.handleChange}
                        />
                        <p
                          className="has-text-danger"
                          hidden={!this.state.errors.fullName}
                        >
                          {this.state.errors.fullName}
                        </p>
                      </Control>
                    </Field>
                    <Field>
                      <label
                        className="label has-text-left"
                        htmlFor="npi-number"
                      >
                        NPI Number
                      </label>
                      <Control>
                        <Input
                          id="npi-number"
                          name="npiNumber"
                          placeholder="NPI Number"
                          value={this.state.fields.npiNumber || ""}
                          onChange={this.handleChange}
                        />
                        <p
                          className="has-text-danger"
                          hidden={!this.state.errors.npiNumber}
                        >
                          {this.state.errors.npiNumber}
                        </p>
                      </Control>
                    </Field>
                    <Field>
                      <label
                        className="label has-text-left"
                        htmlFor="business-address"
                      >
                        Business Address
                      </label>
                      <Control>
                        <Input
                          id="business-address"
                          name="businessAddress"
                          placeholder="Business Address"
                          value={this.state.fields.businessAddress || ""}
                          onChange={this.handleChange}
                        />
                        <p
                          className="has-text-danger"
                          hidden={!this.state.errors.businessAddress}
                        >
                          {this.state.errors.businessAddress}
                        </p>
                      </Control>
                    </Field>
                    <Field>
                      <label
                        className="label has-text-left"
                        htmlFor="telephone-number"
                      >
                        Telephone Number
                      </label>
                      <Control>
                        <Input
                          id="telephone-number"
                          name="phoneNumber"
                          placeholder="Telephone Number"
                          value={this.state.fields.phoneNumber || ""}
                          onChange={this.handleChange}
                        />
                        <p
                          className="has-text-danger"
                          hidden={!this.state.errors.phoneNumber}
                        >
                          {this.state.errors.phoneNumber}
                        </p>
                      </Control>
                    </Field>
                    <Control>
                      <Button
                        type="submit"
                        className="bg-orange has-text-white"
                      >
                        Submit
                      </Button>
                    </Control>
                  </Section>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}

export default HealthcareRegistrationForm;
