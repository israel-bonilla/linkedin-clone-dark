import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EventIcon from '@material-ui/icons/Event';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InputOption from './InputOption';
import Post from './Post';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import linkedin_clone_screenshot from './images/linkedin_clone_screenshot.png';

const Feed = () => {
    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )));
        })
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoUrl,
            imageURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('');
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder="Start a post" 
                        value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit" >Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={VideoCallIcon} title="Video" color="#39cf52" />
                    <InputOption Icon={EventIcon} title="Event" color="#ffb949" />
                    <InputOption Icon={ListAltIcon} title="Write article" color="#f87b8c" />
                </div>
            </div>

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                    <Post key={id} name={name} description={description}
                    message={message} photoURL={photoURL}/>
                ))}
            </FlipMove>
            <Post name="Elon Musk" description="8,856,191 followers" message="This new theme reminds me of space" photoURL="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg" />
            <Post name="LinkedIn" description="390,422 followers" message="Hi everyone! We just dropped this new dark theme for LinkedIn! Check it out!" 
            imageURL={linkedin_clone_screenshot} photoURL="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" />
            <Post name="Israel Bonilla" description="52,999,999 followers" message="Woah this is super neat" photoURL="https://avatars.githubusercontent.com/u/88968441?v=4" />
        </div>
    )
}

export default Feed
