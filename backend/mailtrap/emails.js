import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("email sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification email: ${error}`);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  const response = await mailtrapClient.send({
    from: sender,
    to: recipient,
    template_uuid: "09480ee1-54e5-4b5b-a6bb-24c578368da7",
    template_variables: {
      company_info_name: "Mason and co",
      name: name,
    },
  });

  console.log("Welcome email sent successfully", response);

  try {
  } catch (error) {
    console.log(`Error sending verification email: ${error}`);
    throw new Error(`Error sending verification email: ${error}`);
  }
};
