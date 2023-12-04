import { useContext } from 'react';

import '../CustomPizzaDetails.css';

import { formatDateTime } from '../../../utils/dateUtil';
import AuthContext from '../../../contexts/AuthContext';


export default function SingleComment({
    comment,
    onEditContent
}) {
    const { userId } = useContext(AuthContext);

    const onClickEdit = () => {
        onEditContent(comment)
    }
    return (
        <li className="comment">
            <p className='username'>User: {comment.creator.username}</p>
            <p>{comment.content}</p>
            <div className='buttons_date'>
                <p className='date'>{formatDateTime(comment._createdOn)}</p>
                {userId === comment._ownerId && <div className='buttons'>
                    <button className='edit' onClick={onClickEdit} >Edit</button>
                    <button className='delete'>Delete</button>
                </div>}
            </div>
        </li>
    );
}

