import { Checkbox, Input, styled } from "@mui/joy"
import React from "react"
import { FormAutocomplete } from "./FormAutocomplete";

export type FormProps = Omit<props, 'form' | 'setForm'>


const StyledInput = styled('input')({
    border: 'none', // remove the native input border
    minWidth: 0, // remove the native input width
    outline: 0, // remove the native input outline
    padding: 0, // remove the native input padding
    paddingTop: '1em',
    flex: 1,
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    textOverflow: 'ellipsis',
    '&::placeholder': {
        opacity: 0,
        transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
        opacity: 1,
    },
    '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
        top: '0.5rem',
        fontSize: '0.75rem',
    },
    '&:focus ~ label': {
        color: 'var(--Input-focusedHighlight)',
    },
    '&:-webkit-autofill': {
        alignSelf: 'stretch', // to fill the height of the root slot
    },
    '&:-webkit-autofill:not(* + &)': {
        marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
        paddingInlineStart: 'var(--Input-paddingInline)',
        borderTopLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
        borderBottomLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    },
});

const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Input-minHeight) - 1em) / 2)',
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerInput = React.forwardRef<
    HTMLInputElement,
    JSX.IntrinsicElements['input']
>(function InnerInput(props, ref) {
    const id = React.useId();
    return (
        <React.Fragment>
            <StyledInput {...props} ref={ref} id={id} />
            <StyledLabel htmlFor={id}>{props.name}</StyledLabel>
        </React.Fragment>
    );
});

export type inputType = 'text' | 'password' | 'number' | 'checkbox' | 'autocomplete' | 'date' 

type props = {
    name: string
    label: string
    setForm: React.Dispatch<any>
    form: any
    type?: inputType
    placeholder?: string
    disabled?: boolean
    sourceUrl?: string
    displayProp?: string
}

export function FormInput({ name, label, form, setForm, type = 'text', placeholder = '', disabled = false, sourceUrl, displayProp }: props) {
    return (
        <>
            {
            type === 'checkbox' ?
                <Checkbox sx={{ display: 'flex', alignItems: 'center', marginY: '10px'}} label={label} slotProps={{ input: { onChange: () => setForm({ ...form, [name]: !form[name] }) }}} />: 
            type === 'autocomplete' ?
                <FormAutocomplete name={name} state={form} setState={setForm} url={sourceUrl ?? ''} displayProp={displayProp ?? ''} label={label}/> :
             
                <Input
                    slots={{ input: InnerInput }}
                    slotProps={{
                        input: {
                            placeholder: placeholder, type: type, value: form[name] ?? '', name: label, disabled: disabled,
                            onChange: (e) => setForm({ ...form, [name]: e.target.value })
                        }
                    }}
                    sx={{ '--Input-minHeight': '56px', opacity: disabled ? 0.7 : 1, width: '200px' }}/>
            }
        </>
    )
}