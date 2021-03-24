import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
  Switch,
  Alert
} from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';


type FormTypes = {
  email: string,
  password: string,
  confirmPassword: string,
  agreeToTerms: boolean
}





const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text 
    style={{ marginBottom: 3 }}>
      {label}</Text>  
    {children}
    <Text style={{ color: 'red' }}>
      {formikProps?.touched[formikKey] && formikProps?.errors[formikKey]}
    </Text>
  </View>
);

const StyledInput: React.FC<FormikProps<{}>> = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        autoCorrect={false}

        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};


type InputPropsTypes = {
  [key: string]: any,
  formikKey?: string, 
  formikProps?: {
    values?: any,
    setFieldValue?: (a:any, b:any)=> void
  }, label?: string
}

const StyledSwitch: React.FC<InputPropsTypes> = ({ formikKey = "", formikProps = {}, label = "", ...rest }) => (
  <FieldWrapper 
     //-----------------------------------------
   label={label} 
      //-----------------------------------------
   formikKey={formikKey} 
      //-----------------------------------------
   formikProps={formikProps}
      //-----------------------------------------
   
   >
    <Switch
       //-----------------------------------------
      value={formikProps.values[formikKey]}
      //-----------------------------------------
      onValueChange={(value:boolean) => {
           //-----------------------------------------
        formikProps.setFieldValue(formikKey, value);
      }}
      //-----------------------------------------
      {...rest}
    />
  </FieldWrapper>
);




const validationSchema = yup.object<FormTypes>().shape({
  // -----------------------------------------------------
  // user enter email value
  email: yup.string().label('Email').email().required(),
   // -----------------------------------------------------
   // user enter password value
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
     // -----------------------------------------------------
     // user enter confirm pasword value, that must much with password value
  confirmPassword: yup
    .string()
    .required()
    .label('Confirm password')
    .test('passwords-match', 'Passwords must match ya fool', function (value: string) {
      return this.parent.password === value;
    }),
     // -----------------------------------------------------
     // switch view 
     // boolean value
  agreeToTerms: yup
    .boolean()
    .label('Terms')
    .test(
      'is-true',
      'Must agree to terms to continue',
      // ------- callback for testing the value match
      (value: boolean) => value === true
    ),
     // -----------------------------------------------------
});

const initValues: FormTypes = {
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
}

export default () => (
  <SafeAreaView style={{ marginTop: 90 }}>
    <Formik
     //-----------------------------------------
      initialValues={initValues}
      //-----------------------------------------
      // user submit form
      // after 1 s formik will end submiting
      // by setting submition to false
      // values : 
      // actions: 
      onSubmit={(values, actions) => {
         // console.log(values)
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
       //-----------------------------------------
      validationSchema={validationSchema}
       //-----------------------------------------
    >
      {(formikProps) => (
        <React.Fragment>
          <StyledInput
           //-----------------------------------------
            label="Email"
             //-----------------------------------------
            formikProps={formikProps}
             //-----------------------------------------
            formikKey="email"
             //-----------------------------------------
            placeholder="johndoe@example.com"
             //-----------------------------------------
            autoFocus
             //-----------------------------------------
          />

          <StyledInput
           //-----------------------------------------
            label="Password"
             //-----------------------------------------
             // 
            formikProps={formikProps}
             //-----------------------------------------
            formikKey="password"
             //-----------------------------------------
            placeholder="password"
             //-----------------------------------------
             // secureTextEntry
             // will transform user intput into ***
            secureTextEntry
             //-----------------------------------------
          />

          <StyledInput
            label="Confirm Password"
             //-----------------------------------------
            formikProps={formikProps}
             //-----------------------------------------
            formikKey="confirmPassword"
             //-----------------------------------------
            placeholder="confirm password"
             //-----------------------------------------
            secureTextEntry
             //-----------------------------------------
          />

          <StyledSwitch
           //-----------------------------------------
            label="Agree to Terms"
             //-----------------------------------------
            formikKey="agreeToTerms"
             //-----------------------------------------
            formikProps={formikProps}
             //-----------------------------------------
          />

          {
          //-----------------------------------------
          formikProps.isSubmitting ? (
          //-----------------------------------------
            <ActivityIndicator />
          ) : (
          //-----------------------------------------
            <Button title="Submit"
           //-----------------------------------------
            onPress={formikProps.handleSubmit} />
          //-----------------------------------------
          )}
        </React.Fragment>
      )}
    </Formik>
  </SafeAreaView>
);