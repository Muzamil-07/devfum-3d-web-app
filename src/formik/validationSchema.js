import * as Yup from "yup";

const ContactValidationSchema = Yup.object({
  name: Yup.string().required("Name is mandatory"),
  email: Yup.string().email("Invalid Email").required("Email is mandatory"),
  contact: Yup.string().required("Contact info is mandatory"),
  company: Yup.string().required("Company name is mandatory"),
  subject: Yup.string().required("Subject is mandatory"),
  message: Yup.string().required("Message is mandatory"),
});

export { ContactValidationSchema };
