import React from 'react'
import FormWrapper from './FormWrapper'
type AccountData = {
    email: string,
    password: string,
}

type AccountFromProps = {
    updateFields: (fields: Partial<AccountData>) => void
} & AccountData


function AccoutnForm({ email, password, updateFields }: AccountFromProps) {
    return (
        <FormWrapper title='Accoutn Details'>
            <label >Email</label>
            <input autoFocus required type="email"
                value={email}
                onChange={(e) => { updateFields({ email: e.target.value }) }} />
            <label >Password</label>
            <input required type="password"
                value={password}
                onChange={(e) => { updateFields({ password: e.target.value }) }} />
        </FormWrapper>
    )
}

export default AccoutnForm