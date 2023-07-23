import React from 'react'


type FormWrapperProps = {
    title: string,
    children: React.ReactNode
}

function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h1 style={{ textAlign: 'center', margin: 0, marginBottom: '1rem' }}>{title}</h1>
            <div style={{
                display: 'grid',
                gap: '1rem 0.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                gridTemplateColumns: 'auto minmax(auto, 400px)',
                
            }}>{children}</div>
        </>
    )
}

export default FormWrapper