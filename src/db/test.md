import axios from "axios";

//Comunicação básica com a API

export const api = axios.create({
    // baseURL: 'https://hn.algolia.com/api/v1/search?query='
})  


------------------------------------------------------


interface book{
    created_at: string,
    title: string,
    url: string,
    author: string,
    points: number,
    story_text: boolean,
    comment_text: boolean,
    num_comments: number,
    story_id: boolean,
    story_title: boolean,
    story_url: boolean,
    parent_id: boolean,
    created_at_i: number,
    relevancy_score: number,
    _tags: [],
    objectID: string,
    _highlightResult:{
        title: {
            value: string,
            matchLevel: string,
            fullyHighlighted: boolean,
            matchedWords: []
        },
        url: {
            value: string,
            matchLevel: string,
            matchedWords: []
        },
        author: {
            value: string,
            matchLevel: string,
            matchedWords: []
        }
    } 
}

export function Dashboard(){
    const [book, setBook] = useState<book[]>([]);

    useEffect(() => {
        api.get('product')
            .then(response => setBook(response.data.product));
            console.log(book);
    }, []);

    return(
        <Container>
            {book.map(book=>( 
                <SummaryBooks 
                created_at =  {book.created_at}
                title = { book.title }
                url =  {book.url}
                author = {book.author}
                points = {book.points}
                story_text = {book.story_text}
                comment_text = { book.comment_text }
                num_comments = { book.num_comments }
                story_id =  { book.story_id }
                story_title = { book.story_title }
                story_url = { book. story_url}
                parent_id = { book.parent_id }
                created_at_i ={ book.created_at_i }
                relevancy_score ={ book.relevancy_score }
                _tags ={ book._tags }
                objectID = { book.objectID }
                    _highlightResult  ={ book._highlightResult } 
                /> ))}