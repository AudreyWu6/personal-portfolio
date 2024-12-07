import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

interface NewsletterProps {
  status: 'sending' | 'error' | 'success' | undefined;
  message?: string | Error | null;
  onValidated: (formData: { EMAIL: string }) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      onValidated({ EMAIL: email });
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  const renderMessage = () => {
    if (status === 'error') {
      const errorMessage = message instanceof Error ? message.message : message;
      return errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : null;
    }
    if (status === 'success') {
      // return message ? <Alert variant="success">{message}</Alert> : null;
      if (message instanceof Error) {
        console.log(message);
        return <Alert variant="danger">Error: {message.message}</Alert>;
      }
      return message ? <Alert variant="success">{message}</Alert> : null;
    }
    if (status === 'sending') {
      return <Alert>Sending...</Alert>;
    }
    return null;
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {renderMessage()}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                  required 
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}