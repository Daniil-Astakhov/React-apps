import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup'



const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.neme}>{label}</label>
                <input {...props}
                    {...field}/>
            {meta.touched && meta.error ? (
                <div className='error' style={{transition: "all 2s ease"}}>{meta.error}</div>
            ) : null}
        </>
        
    )
};
const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return (
        <>
            <label className='checkbox'>
                <input type='checkbox'{...props}
                    {...field}/>
                    {children}
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
        
    )
};


const Forms = () => {
    return (
        <Formik
        initialValues = {{
            email: '',
            name: '',
            amount: 0,
            currency: '',
            test: '',
            terms: false
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                    .min(5, 'Минимум 5 символов')
                    .required('Обязательное поле!'),
            email: Yup.string()
                    .email('Проверьте данные')
                    .required('Обязательное поле!'),
            amount: Yup.number()
                    .min(5, 'Не менее 5 злотых')
                    .required('Обязательное поле!'),
            currency: Yup.string()
                    .required('Выберите валюту'),
            text: Yup.string()
                  .min(10, 'Не менее 10 символов'),
            terms: Yup.boolean()
                  .required('Необходимо согласиться')
                  .oneOf([true], 'Вы должны согласиться')
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <MyTextInput 
                    label = 'Ваше имя'
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput 
                    label = 'Ваша почта'
                    id="email"
                    name="email"
                    type="text"
                />

                <MyTextInput 
                    label = 'Колличество'
                    id="amount"
                    name="amount"
                    type="text"
                />

                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'>
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component='div'/>

                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as='textarea'
                />
                <ErrorMessage className="error" name="text" component='div'/>
                <MyCheckBox name='terms'>Соглашаетесь с политикой конфиденциальности? </MyCheckBox>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
        
    )
}

export default Forms;