import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { Formik } from 'formik'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'

import Input from '../input'
import DatePicker from '../datePicker'
import Button from '../button'

const RowInputs = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;

  & > div,
  & > span {
    flex: 1;
  }

  & > div:not(:first-child),
  & > span:not(:first-child) {
    margin-left: 0px;
    margin-top: 10px;
  }

  @media (min-width: 640px) {
    flex-direction: row;

    & > div:not(:first-child),
    & > span:not(:first-child) {
      margin-left: 8px;
      margin-top: 0;
    }
  }
`

const SuccessMessage = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;

  span {
    font-weight: normal;
  }
`

const TermMessage = styled.span`
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  display: block;
`

function FormBenefits({ hideOnSuccess, onSuccess }) {
  const intl = useIntl().formatMessage
  const [success, setSuccess] = useState(false)

  const onSubmit = async (values, { setSubmitting }) => {
    const checkIn = values.checkIn.toLocaleDateString().split('/')
    const checkOut =
      values.checkOut !== '' ? values.checkOut.toLocaleDateString().split('/') : ['', '', '']

    const res = await addToMailchimp(values.email, {
      COUPLESNAM: values.name,
      COUNTRY: values.city,
      PHONENUMBE: values.phoneNumber,
      GUESTS: values.guests,
      TYPECEREMO: values.typeOfCeremony,
      'FIRSTDATE[day]': checkIn[0],
      'FIRSTDATE[month]': checkIn[1],
      'FIRSTDATE[year]': checkIn[2],
      'SECONDDATE[day]': checkOut[0],
      'SECONDDATE[month]': checkOut[1],
      'SECONDDATE[year]': checkOut[2],
    })

    if (res.result === 'success') {
      setSuccess(true)
      onSuccess()
    }

    setSubmitting(false)
  }

  if (hideOnSuccess && success) {
    return (
      <SuccessMessage>
        {intl({ id: 'successMessage.main' })}
        <br />
        <span>{intl({ id: 'successMessage.sub' })}</span>
      </SuccessMessage>
    )
  }

  return (
    <Formik
      initialValues={{
        name: '',
        city: '',
        phoneNumber: '',
        email: '',
        checkIn: '',
        checkOut: '',
      }}
      validate={(values) => {
        const errors = {}

        if (!values.email) {
          errors.email = intl({ id: 'formBenefits.required' })
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = intl({ id: 'formBenefits.invalidEmail' })
        }

        return errors
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <RowInputs>
            <Input
              required
              iconProps={{ iconName: 'Contact' }}
              label={intl({ id: 'formBenefits.name' })}
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              required
              iconProps={{ iconName: 'CityNext2' }}
              label={intl({ id: 'formBenefits.city' })}
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </RowInputs>
          <RowInputs>
            <Input
              required
              iconProps={{ iconName: 'Phone' }}
              label={intl({ id: 'formBenefits.phoneNumber' })}
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              required
              iconProps={{ iconName: 'Mail' }}
              label={intl({ id: 'formBenefits.email' })}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.email && touched.email && errors.email}
            />
          </RowInputs>
          <RowInputs>
            <DatePicker
              isRequired
              label={intl({ id: 'formBenefits.checkIn' })}
              value={values.checkIn}
              onChange={(date) => setFieldValue('checkIn', date)}
            />
            <DatePicker
              isRequired
              label={intl({ id: 'formBenefits.checkOut' })}
              value={values.checkOut}
              onChange={(date) => setFieldValue('checkOut', date)}
            />
          </RowInputs>
          <Button disabled={isSubmitting} type="submit">
            {intl({ id: 'formBenefits.button' })}
          </Button>
          <TermMessage>{intl({ id: 'formBenefits.terms' })}</TermMessage>
        </form>
      )}
    </Formik>
  )
}

export default FormBenefits
