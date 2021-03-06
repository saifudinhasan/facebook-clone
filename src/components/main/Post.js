import './Post.css'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Delete from '@material-ui/icons/Delete';
import { useStateValue } from '../../contexts/StateProvider';
import database from '../../firebase';

export default function Post({ docID, profilePict, image, username, timestamp, message }) {

  const { user, databaseDelete } = useStateValue()

  const handleDeletePost = () => (user.displayName === username) && databaseDelete('posts', docID)


  return (
    <div className="post">

      <div className="post__top">
        <Avatar src={profilePict} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp ? new Date(timestamp.seconds * 1000).toGMTString() : 'Just Now'}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
        <div className="post__option" onClick={() => handleDeletePost()}>
          <Delete />
        </div>
      </div>
    </div>
  )
}