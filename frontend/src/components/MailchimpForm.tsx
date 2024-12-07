import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

interface RenderProps {
  subscribe: (data: { EMAIL: string }) => void;
  status: "sending" | "error" | "success" | undefined;
  message: string;
}

export const MailchimpForm: React.FC = () => {
  const postUrl: string = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }: RenderProps) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData: { EMAIL: string }) => subscribe(formData)}
        />
      )}
    />
  );
};