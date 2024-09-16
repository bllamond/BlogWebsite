import React , {useEffect , useState} from 'react';
import { Container , Postform } from '../components';
import service from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams() // taking value from url
    const navigate = useNavigate()

    useEffect( () => {
        if(slug){
            service.getPost(slug).then( (post) => {
                if(post){
                    setPost(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
    return post ? (
        <div className='py-12'>
            <Container>
                <Postform post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost;