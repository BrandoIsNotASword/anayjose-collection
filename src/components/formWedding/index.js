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
  font-size: 0.75em;
  text-align: center;
  margin-top: 5px;
  display: block;
`

function FormWedding({ hideOnSuccess, onSuccess }) {
  const intl = useIntl().formatMessage
  const [success, setSuccess] = useState(false)

  const onSubmit = async (values, { setSubmitting }) => {
    const firstDate = values.firstDate.toLocaleDateString().split('/')
    const secondDate =
      values.secondDate !== '' ? values.secondDate.toLocaleDateString().split('/') : ['', '', '']

    const res = await addToMailchimp(values.email, {
      COUPLESNAM: values.couplesName,
      COUNTRY: values.country,
      PHONENUMBE: values.phoneNumber,
      GUESTS: values.guests,
      TYPECEREMO: values.typeOfCeremony,
      'FIRSTDATE[day]': firstDate[0],
      'FIRSTDATE[month]': firstDate[1],
      'FIRSTDATE[year]': firstDate[2],
      'SECONDDATE[day]': secondDate[0],
      'SECONDDATE[month]': secondDate[1],
      'SECONDDATE[year]': secondDate[2],
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
        couplesName: '',
        country: '',
        phoneNumber: '',
        email: '',
        firstDate: '',
        secondDate: '',
        guests: 1,
        typeOfCeremony: '',
      }}
      validate={(values) => {
        const errors = {}

        if (!values.email) {
          errors.email = intl({ id: 'formWedding.required' })
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = intl({ id: 'formWedding.invalidEmail' })
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
              iconProps={{ iconName: 'Heart' }}
              label={intl({ id: 'formWedding.couplesName' })}
              name="couplesName"
              value={values.couplesName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              required
              iconProps={{ iconName: 'Flag' }}
              label={intl({ id: 'formWedding.country' })}
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </RowInputs>
          <RowInputs>
            <Input
              required
              iconProps={{ iconName: 'Phone' }}
              label={intl({ id: 'formWedding.phoneNumber' })}
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              required
              iconProps={{ iconName: 'Mail' }}
              label={intl({ id: 'formWedding.email' })}
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
              label={intl({ id: 'formWedding.firstDate' })}
              value={values.firstDate}
              onChange={(date) => setFieldValue('firstDate', date)}
            />
            <DatePicker
              label={intl({ id: 'formWedding.secondDate' })}
              value={values.secondDate}
              onChange={(date) => setFieldValue('secondDate', date)}
              description={intl({ id: 'formWedding.descriptionSecondDate' })}
            />
          </RowInputs>
          <RowInputs>
            <Input
              required
              label={intl({ id: 'formWedding.guests' })}
              type="number"
              min={1}
              name="guests"
              value={values.guests}
              onChange={handleChange}
              onBlur={handleBlur}
              iconProps={{ iconName: 'Family' }}
            />
            <Input
              label="Type of ceremony"
              label={intl({ id: 'formWedding.typeOfCeremony' })}
              iconProps={{ iconName: 'PageLink' }}
              name="typeOfCeremony"
              value={values.typeOfCeremony}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={intl({ id: 'formWedding.descriptionTypeOfCeremony' })}
            />
          </RowInputs>
          <Button disabled={isSubmitting} type="submit">
            {intl({ id: 'formWedding.button' })}
          </Button>
          <TermMessage>{intl({ id: 'formWedding.terms' })}</TermMessage>
        </form>
      )}
    </Formik>
  )
}

export default FormWedding
