import { useContext } from 'react';

import '../CustomPizzaDetails.css';

import { formatDateTime } from '../../../utils/dateUtil';
import AuthContext from '../../../contexts/AuthContext';


export default function SingleComment({
    comment,
    onEditContent,
    onDeleteComment
}) {
    const { userId, email } = useContext(AuthContext);

    const onClickEdit = () => {
        onEditContent(comment)
    }

    const onClickDelete = ()=>{
        onDeleteComment(comment._id, comment.creator.username);
    }
    return (
        <li className="comment">
            <p className='username'>User: {comment.creator.username}</p>
            <p>{comment.content}</p>
            <div className='buttons_date'>
                <p className='date'>{formatDateTime(comment._createdOn)}</p>
                {(userId === comment._ownerId || email === 'admin@abv.bg')  && <div className='buttons'>
                    <button className='edit' onClick={onClickEdit} >Edit</button>
                    <button className='delete' onClick={onClickDelete}>Delete</button>
                </div>}
            </div>
        </li>
    );
}

