import React from "react";
import HealthcareRegistrationForm from "./components/HealthcareRegistrationForm";
import { Hero, Container, Title, SubTitle, Section } from "reactbulma";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Section>
        <Hero>
          <Hero.Body className="is-paddingless">
            <Container>
              <Title className="is-bolder">
                Register your healthcare provider
              </Title>
              <SubTitle>
                Please complete this form with accurate information
              </SubTitle>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <HealthcareRegistrationForm />
    </div>
  );
}

export default App;
