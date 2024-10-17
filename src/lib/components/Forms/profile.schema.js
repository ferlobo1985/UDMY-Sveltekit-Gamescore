import yup from 'yup';

export default async function schemaValidation(formData){
    /// GET DATA
    const data = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
    }

    // SCHEMA
    const schema = yup.object({
        firstname: yup.string().required('Firstname is required').min(2).max(50),
        lastname: yup.string().required('Lastname is required').min(2).max(50),
    })

    /// TRY CATCH
    try {
        await schema.validate(data,{ abortEarly: false});
        return { success: true, data: data}
    } catch (errors) {
        let newErrors = {};
        errors.inner.forEach(({path,message}) => {
            if(path != null){
                newErrors[path] = message;
            }
        });
        return { success: false, errors:newErrors}
    }
}