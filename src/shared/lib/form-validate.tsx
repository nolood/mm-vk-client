import { type ChangeEvent, type FormEvent, useState } from "react";

export type FormValues = Record<string, string>;

type ValidationRules = Record<string, { required: boolean }>;

type FormErrors = Record<string, string>;

interface UseFormValidation {
  values: FormValues;
  errors: FormErrors;
  isValid: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setFormValues: (values: FormValues) => void;
}

const useForm = (
  initialState: FormValues,
  validationRules: ValidationRules,
  onSubmit: () => void,
): UseFormValidation => {
  const [values, setValues] = useState<FormValues>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const setFormValues = (values: FormValues): void => {
    setValues(values);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = validate(values, validationRules);
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit();
    }
  };

  const validate = (values: FormValues, rules: ValidationRules): FormErrors => {
    const errors: FormErrors = {};
    for (const key in rules) {
      if (Object.prototype.hasOwnProperty.call(rules, key)) {
        const value = values[key];
        const validationRule = rules[key];
        console.log(values);
        if (validationRule.required && !value) {
          errors[key] = "Это поле обязательно для заполнения";
        }
      }
    }
    return errors;
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    handleSubmit,
    setFormValues,
  };
};

export default useForm;
