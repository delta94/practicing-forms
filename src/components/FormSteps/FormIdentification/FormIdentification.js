import React from 'react'
import { message } from 'antd'
import { useForm } from 'react-hook-form'
import { BasicInput } from '../Inputs'
import { schema } from '../../../utils'
import { TitleSection, Form } from './FormIdentification.styles'

export default function FormIdentification() {
  const { handleSubmit, errors, register } = useForm({
    validationSchema: schema,
  })

  const onSubmit = () => {
    message.success('Processing complete!')
    // console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TitleSection>Identificação</TitleSection>
      <>
        <BasicInput
          width={46}
          type="text"
          name="fullName"
          errors={errors}
          register={register}
          label="Nome completo"
          placeholder="Nome completo"
        />

        <BasicInput
          width={46}
          name="cpf"
          type="text"
          label="CPF"
          errors={errors}
          register={register}
          placeholder="000.0000.000-00"
        />

        <BasicInput
          width={46}
          type="email"
          name="email"
          label="E-mail"
          errors={errors}
          register={register}
          placeholder="Email"
        />

        <BasicInput
          width={46}
          type="email"
          errors={errors}
          register={register}
          name="confirmEmail"
          label="Confirmação do e-mail"
          placeholder="Confirmar e-mail"
        />
      </>
      <TitleSection>Endereço de Entrega</TitleSection>
      <>
        <BasicInput
          type="text"
          name="cep"
          width={30}
          label="CEP"
          errors={errors}
          register={register}
          placeholder="000000-000"
        />

        <BasicInput
          width={62}
          type="text"
          name="street"
          errors={errors}
          register={register}
          label="Logradouro"
          placeholder="Rua/Avenida..."
        />

        <BasicInput
          width={20}
          type="text"
          label="Número"
          name="number-street"
          errors={errors}
          register={register}
          placeholder="Número"
        />

        <BasicInput
          width={40}
          type="text"
          errors={errors}
          register={register}
          name="complement"
          label="Complemento"
          placeholder="Complemento"
        />

        <BasicInput
          width={30}
          type="text"
          errors={errors}
          register={register}
          label="Bairro"
          name="neighborhood"
          placeholder="Bairro"
        />

        <BasicInput
          width={35}
          type="text"
          name="city"
          label="Cidade"
          errors={errors}
          register={register}
          placeholder="Cidade"
        />

        <BasicInput
          width={20}
          name="uf"
          label="UF"
          type="text"
          errors={errors}
          register={register}
          placeholder="UF"
        />

        <BasicInput
          width={35}
          type="text"
          name="phone"
          label="Celular"
          errors={errors}
          register={register}
          placeholder="Celular"
        />
      </>
      {/* <input type="submit" /> */}
    </Form>
  )
}
