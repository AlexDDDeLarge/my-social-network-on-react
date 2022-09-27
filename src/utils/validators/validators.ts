export type FieldValidatorType = (value?: string) => string | undefined

export const required: FieldValidatorType = (value) => {
  if (value) return undefined;
  return 'Field is required';
}

const maxLength = (max: number): FieldValidatorType => (value) => {
  if (value && value.length <= max) return undefined;
  return `The entered text must be not longer ${max} symbols`;
}

const minLength = (min: number): FieldValidatorType => (value) => {
  if (value && value.length >= min) return undefined;
  return `The entered text must be not longer ${min} symbols`;
}

//NewPostForm:
//-newPostBody
export const maxPostBodyLength = maxLength(300);
export const minPostBodyLength = minLength(0);

//SendMessageForm
//-newMessageBody
export const minMessageBodyLength = minLength(0);
export const maxMessageBodyLength = maxLength(650);