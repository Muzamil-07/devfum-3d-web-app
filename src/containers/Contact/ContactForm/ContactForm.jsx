"use client";

import useValidation from "@/formik/useValidation";
import { ContactValidationSchema } from "@/formik/validationSchema";
import {
  ContactFormButton,
  ContactFormContainer,
  ContactFormField,
  ContactFormHeading,
  ContactFormHeadingContainer,
  ContactFormInnerCOntainer,
  ContactFormSubHeading,
} from "@/themes/themes";
import React from "react";

const ContactForm = () => {
  const initialValues = { name: "", email: "", contact: "", company: "", subject: "", message: "" };
  async function handleSubmit(values) {
    console.log(values);
  }
  const formik = useValidation({
    initialValues,
    validationSchema: ContactValidationSchema,
    handleSubmit,
  });

  return (
    <ContactFormContainer>
      <ContactFormHeadingContainer>
        <ContactFormHeading variant='h5'>CONTACT US</ContactFormHeading>
        <ContactFormSubHeading>
          Fill out the form and we contact you as soon as possible
        </ContactFormSubHeading>
      </ContactFormHeadingContainer>

      <ContactFormInnerCOntainer>
        <ContactFormField
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && !!formik.errors.name && formik.errors.name}
          label='Name'
          variant='standard'
        />
        <ContactFormField
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && !!formik.errors.email && formik.errors.email}
          label='Email'
          variant='standard'
        />
        <ContactFormField
          name='contact'
          value={formik.values.contact}
          onChange={formik.handleChange}
          error={formik.touched.contact && !!formik.errors.contact}
          helperText={formik.touched.contact && !!formik.errors.contact && formik.errors.contact}
          label='Contact'
          variant='standard'
        />
        <ContactFormField
          name='company'
          value={formik.values.company}
          onChange={formik.handleChange}
          error={formik.touched.company && !!formik.errors.company}
          helperText={formik.touched.company && !!formik.errors.company && formik.errors.company}
          label='Company'
          variant='standard'
        />
        <ContactFormField
          name='subject'
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && !!formik.errors.subject}
          helperText={formik.touched.subject && !!formik.errors.subject && formik.errors.subject}
          label='Subject'
          variant='standard'
        />
        <ContactFormField
          name='message'
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && !!formik.errors.message}
          helperText={formik.touched.message && !!formik.errors.message && formik.errors.message}
          label='Message'
          variant='standard'
          multiline
        />
        <ContactFormButton variant='outlined' onClick={formik.handleSubmit}>
          Send
        </ContactFormButton>
      </ContactFormInnerCOntainer>
    </ContactFormContainer>
  );
};

export default ContactForm;
