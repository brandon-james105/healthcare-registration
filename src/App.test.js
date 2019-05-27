import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import ReactTestUtils from "react-dom/test-utils";
import App from "./App";
import HealthcareRegistrationForm from "./components/HealthcareRegistrationForm";

const container = document.createElement("div");

it("renders without crashing", () => {
  ReactDOM.render(<App />, container);
  ReactDOM.unmountComponentAtNode(container);
});

it("can render a registration form", () => {
  act(() => {
    ReactDOM.render(<HealthcareRegistrationForm />, container);
  });
  const inputIds = [];
  container.querySelectorAll("#register form input").forEach(input => {
    inputIds.push(input.id);
  });

  [
    "email",
    "email-confirm",
    "full-name",
    "npi-number",
    "business-address"
  ].forEach(inputId => {
    expect(inputIds.find(i => i === inputId) || "").toBe(inputId);
  });
});

it("can successfully submit the form with valid input", () => {
  act(() => {
    ReactDOM.render(<HealthcareRegistrationForm />, container);
  });
  const inputs = {};
  container.querySelectorAll("#register form input").forEach(input => {
    inputs[input.id] = input;
  });

  inputs["email"].value = "brucewayne@wayneenterprises.com";
  inputs["email-confirm"].value = "brucewayne@wayneenterprises.com";
  inputs["full-name"].value = "Bruce Wayne";
  inputs["npi-number"].value = "7773256152";
  inputs["business-address"].value = "51939 27th Ave, Gotham City";
  inputs["telephone-number"].value = "5558675309";

  act(() => {
    Object.keys(inputs).forEach(id => {
      ReactTestUtils.Simulate.change(inputs[id]);
    });

    const warningTexts = [];
    container
      .querySelectorAll("#register form p.has-text-danger")
      .forEach(warningText => {
        warningTexts.push(warningText);
      });

    warningTexts.forEach(warningText => {
      expect(warningText.innerHTML).toBe("");
    });
  });
});

it("prevents form submission if the form input contains an invalid NPI number", () => {
  act(() => {
    ReactDOM.render(<HealthcareRegistrationForm />, container);
  });
  const inputs = {};
  container.querySelectorAll("#register form input").forEach(input => {
    inputs[input.id] = input;
  });

  inputs["email"].value = "brucewayne@wayneenterprises.com";
  inputs["email-confirm"].value = "brucewayne@wayneenterprises.com";
  inputs["full-name"].value = "Bruce Wayne";
  inputs["npi-number"].value = "invalid";
  inputs["business-address"].value = "51939 27th Ave, Gotham City";
  inputs["telephone-number"].value = "5558675309";

  act(() => {
    Object.keys(inputs).forEach(id => {
      ReactTestUtils.Simulate.change(inputs[id]);
    });
    ReactTestUtils.Simulate.submit(container.querySelector("#register form"));
  });
  const warningText = container.querySelector(
    "#npi-number + p.has-text-danger"
  );

  expect(warningText.innerHTML).toBe("Please enter a valid NPI number.");
});

it("prevents form submission if the form input contains an invalid phone number", () => {
  act(() => {
    ReactDOM.render(<HealthcareRegistrationForm />, container);
  });
  const inputs = {};
  container.querySelectorAll("#register form input").forEach(input => {
    inputs[input.id] = input;
  });

  inputs["email"].value = "brucewayne@wayneenterprises.com";
  inputs["email-confirm"].value = "brucewayne@wayneenterprises.com";
  inputs["full-name"].value = "Bruce Wayne";
  inputs["npi-number"].value = "7773256152";
  inputs["business-address"].value = "51939 27th Ave, Gotham City";
  inputs["telephone-number"].value = "invalid";

  act(() => {
    Object.keys(inputs).forEach(id => {
      ReactTestUtils.Simulate.change(inputs[id]);
    });
    ReactTestUtils.Simulate.submit(container.querySelector("#register form"));
  });
  const warningText = container.querySelector(
    "#telephone-number + p.has-text-danger"
  );

  expect(warningText.innerHTML).toBe("Please enter a valid phone number.");
});

it("prevents form submission if the form input email addresses do not match", () => {
  act(() => {
    ReactDOM.render(<HealthcareRegistrationForm />, container);
  });
  const inputs = {};
  container.querySelectorAll("#register form input").forEach(input => {
    inputs[input.id] = input;
  });

  inputs["email"].value = "brucewayne@wayneenterprisescom";
  inputs["email-confirm"].value = "brucewayne@wayneenterprisescom";
  inputs["full-name"].value = "Bruce Wayne";
  inputs["npi-number"].value = "7773256152";
  inputs["business-address"].value = "51939 27th Ave, Gotham City";
  inputs["telephone-number"].value = "5558675309";

  act(() => {
    Object.keys(inputs).forEach(id => {
      ReactTestUtils.Simulate.change(inputs[id]);
    });
    ReactTestUtils.Simulate.submit(container.querySelector("#register form"));
  });
  const warningText = container.querySelector("#email + p.has-text-danger");

  expect(warningText.innerHTML).toBe("Please enter a valid email.");
});

it("prevents form submission if the form input contains an invalid email address", () => {
  act(() => {
    ReactDOM.render(<HealthcareRegistrationForm />, container);
  });
  const inputs = {};
  container.querySelectorAll("#register form input").forEach(input => {
    inputs[input.id] = input;
  });

  inputs["email"].value = "brucewayne@wayneenterprises.com";
  inputs["email-confirm"].value = "luciusfox@wayneenterprises.com";
  inputs["full-name"].value = "Bruce Wayne";
  inputs["npi-number"].value = "7773256152";
  inputs["business-address"].value = "51939 27th Ave, Gotham City";
  inputs["telephone-number"].value = "5558675309";

  act(() => {
    Object.keys(inputs).forEach(id => {
      ReactTestUtils.Simulate.change(inputs[id]);
    });
    ReactTestUtils.Simulate.submit(container.querySelector("#register form"));
  });
  const warningText = container.querySelector(
    "#email-confirm + p.has-text-danger"
  );

  expect(warningText.innerHTML).toBe("This email does not match.");
});
