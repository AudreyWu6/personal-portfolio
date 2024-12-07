     // frontend/src/declarations.d.ts
     declare module "react-mailchimp-subscribe" {
        import * as React from "react";
 
        interface MailchimpSubscribeProps {
          url: string;
          render?: (props: {
            subscribe: (data: any) => void;
            status: "sending" | "error" | "success" | undefined;
            message: string;
          }) => React.ReactElement;
        }
 
        const MailchimpSubscribe: React.FC<MailchimpSubscribeProps>;
 
        export default MailchimpSubscribe;
      }

    declare module 'react-router-hash-link' {
    import { LinkProps } from 'react-router-dom';
    import * as React from 'react';

    export const HashLink: React.FC<LinkProps>;
    }