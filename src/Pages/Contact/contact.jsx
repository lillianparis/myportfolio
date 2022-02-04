import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import "../Contact/style.css";

function ContactForm() {
    const [state, handleSubmit] = useForm("xrgjekke");
    if (state.succeeded) {
        return <p class="hello">Thanks for your Feedback!</p>;
    }
    return (

        <div class="wrap">
        <Container>
        
                <div class="form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Label htmlFor="email">
                            Enter a Email Address
                        </Form.Label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <Form.Label>
                            Share a Message
                        </Form.Label>
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <Button type="submit" disabled={state.submitting}>
                            Submit
                        </Button>

                    </Form>
                </div>
           
        </Container>
        </div>
    );
}

function Inquiry() {
    return (
        <ContactForm />
    );
}
export default Inquiry;