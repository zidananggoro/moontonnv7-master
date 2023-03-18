import { Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/Authenticated/Index";
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import Checkbox from '@/Components/Checkbox';
import ValidationErrors from '@/Components/ValidationErrors';
import Button from '@/Components/Button';



export default function Create({auth}) {
    const { setData, post, processing, errors } = useForm({
        name:'',
        category:'',
        vidio_url:'',
        thumbnail:'',
        rating: '',
        is_featured: false,
    });

   

    const onHandleChange = (event) => {
        setData(event.target.name,event.target.type === 'file' ? event.target.files[0]: event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };

    return (
        <Authenticated auth={auth}>
            <Head title='Admin - Create Movie'/>
              
            <h1 className="text-xl">Insert New Movie</h1>
            <hr className="mb-4"></hr>
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Label forInput="name" value="Name" />
                <Input 
                    type="text"
                    name="name"
                    variant='primary-outline'
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                
                
                />
                  <Label forInput="category" value="Category" className="mt-4" />
                <Input 
                    type="text"
                    name="category"
                    variant='primary-outline'
                    handleChange={onHandleChange}
                    placeholder="Enter the Category of the movie"
                    isError={errors.category}
                
                
                />
                  <Label forInput="vidio_url" value="Vidio URL" className="mt-4" />
                <Input 
                    type="url"
                    name="vidio_url"
                    variant='primary-outline'
                    handleChange={onHandleChange}
                    placeholder="Enter the vidio url of the movie"
                    isError={errors.vidio_url}
                
                
                />

                <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
                <Input 
                    type="file"
                    name="thumbnail"
                    variant='primary-outline'
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                
                
                />

                 <Label forInput="rating" value="Rating" className="mt-4" />
                <Input 
                    type="number"
                    name="rating"
                    variant='primary-outline'
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                
                
                />
                <div className="flex flex-row mt-4 items-center">
                    <Label forInput="is_featured" value="Is Featured" className="mr-3 mt-1" />
                    <Checkbox 
                        name="is_featured"
                        handleChange={(e) => setData("is_featured", e.target.checked)}
                    
                    />
                </div>

                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
                

            </form>
        </Authenticated>
    )
}