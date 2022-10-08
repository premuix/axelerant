import React from "react";
import ReactFormValidation from "react-form-input-validation";



class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        customer_name: "",
        email_address: "",
        phone_number: "",

      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      customer_name: "required|username_available",
      email_address: "required|email",
      phone_number: "required|numeric|digits_between:10,12",

    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
    }

    ReactFormValidation.registerAsync('username_available', function (username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); // if username is not available
        else
          passes();
      }, 1000);
    });
  }

  render() {
    return (

      <>

        <div className="form-item">
          <label>Name</label>
            <input
              type="text"
              name="customer_name"
              onBlur={this.form.handleBlurEvent}
              onChange={this.form.handleChangeEvent}
              value={this.state.fields.customer_name}
              // To override the attribute name
              data-attribute-name="Name"
              data-async
              className="w-100"
            />
          <label className="error">
            {this.state.errors.customer_name
              ? this.state.errors.customer_name
              : ""}
          </label>
        </div>
        <div className="form-item">
          <label>Email</label>
            <input
              type="email"
              name="email_address"
              onBlur={this.form.handleBlurEvent}
              onChange={this.form.handleChangeEvent}
              value={this.state.fields.email_address}
              className="w-100"
            />
          <label className="error">
            {this.state.errors.email_address
              ? this.state.errors.email_address
              : ""}
          </label>
        </div>
        <div className="form-item">
          <label>Phone </label>
          <input
              type="tel"
              name="phone_number"
              onBlur={this.form.handleBlurEvent}
              onChange={this.form.handleChangeEvent}
              value={this.state.fields.phone_number}
              className="w-100"
            />
          <label className="error">
            {this.state.errors.phone_number
              ? this.state.errors.phone_number
              : ""}
          </label>
        </div>


        

        
      </>
    );
  }
}
export default BookingForm;
