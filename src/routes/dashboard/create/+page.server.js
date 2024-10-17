
export const actions = {
    default: async({request,locals})=>{
        const formData = await request.formData();

        console.log(formData);

    }
}