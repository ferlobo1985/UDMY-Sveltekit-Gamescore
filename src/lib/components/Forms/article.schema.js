import yup from 'yup';

export default async function schemaValidation(formData){
    /// GET the form data
    const data = {
        game:formData.get('game'),
        title:formData.get('title'),
        description: formData.get('description'),
        rating: formData.get('rating'),
    };

    /// CREATING A SCHEMA
    const schema =  yup.object({
        game:yup.string().required('Game is required').min(5).max(100),
        title:yup.string().required('Title is required').min(5).max(200),
        description: yup.string().required('Description is required').min(100).max(5000),
        rating: yup.string().required('Rating is required')
        .notOneOf(['Select a rating'],'You need to select a rating')
    })

    /// VALIDATNG
    try {
        await schema.validate(data,{ abortEarly: false})
        return { success: true, data: data}
    } catch(errors){
        let newErrors = {};
        errors.inner.forEach(({path,message}) => {
            if(path != null){
                newErrors[path] = message;
            }
        });
        return { success: false, errors:newErrors}
    }

}