import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useRef } from 'react';
import { useStateValue } from '../../contexts/StateProvider';
import firebase from 'firebase'

export default function MessageSender() {
  const { user, databasePost } = useStateValue()

  const inputRef = useRef()
  const imageRef = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageRef.current.value
    }

    databasePost('posts', newPost)
    imageRef.current.value = ''
    inputRef.current.value = ''
  }


  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <div className="inputs">
            <input ref={inputRef} className="messageSender__input" type="text" placeholder={`What's on your mind? ${user.displayName}`} />
            <input ref={imageRef} className="messageSender__input" type="text" placeholder="image URL (Optional)" />
          </div>
          <button onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}