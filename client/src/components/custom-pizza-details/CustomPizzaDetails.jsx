import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import './CustomPizzaDetails.css'

import * as customPizzaService from '../../services/customPizzaService';
import * as commentsService from '../../services/commentsService';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';
import { formatDate } from '../../utils/dateUtil'
import AuthContext from '../../contexts/AuthContext';
import { formatDateTime } from '../../utils/dateUtil';


export default function CustomPizzaDetails() {

    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({});
    const [shownButtons, setShownButtons] = useState(true);
    const [shownDelete, setShownDelete] = useState(false);
    const navigate = useNavigate();
    const { userId, username } = useContext(AuthContext);
    const [comment, setComment] = useState({
        content: '',
    });

    const [comments, setComments] = useState([]);

    useEffect(() => {
        customPizzaService.getPizzaDetails(pizzaId)
            .then(setPizza)
            .catch((err) => console.log(err));

        commentsService.getCommentsByPizzaId(pizzaId)
            .then(setComments)
            .catch((err) => console.log(err))
    }, [pizzaId]);

    const handleShowButtons = () => {
        setShownButtons(false);
        setShownDelete(true);
    }

    const onClickCloseHandler = () => {
        setShownButtons(true);
        setShownDelete(false);
    }

    const deleteHandler = async (e) => {
        try {

            await customPizzaService.deletePizza(pizzaId);
            navigate(Paths.CustomPizzaList)

        } catch (err) {
            console.log(err);
        }
    }

    const onChangeComment = (e) => {
        setComment(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmitCreateComment = async (e) => {
        e.preventDefault();

        const newComment = await commentsService.createComment(pizzaId, comment.content);
        console.log(newComment)
        newComment.creator = { username };
        setComments(state => ([...state, newComment]))
        setComment({ content: '' });
    }

    const imageSrc = pizza?.imageUrl ? pizza?.imageUrl : "../../images/pizzas/custom-pizza.png";
    return (
        <>
            <div className='pizza-comments-wrapper'>
                < section className="details-wrapper" >
                    <div className='container-img'>
                        <img src={imageSrc} alt={pizza.name} className="details-img" />
                    </div>
                    <div className="details-info">
                        <p>
                            <span className='details-property'>Name:</span>
                            <span className='details-content'> {pizza.name}</span>
                        </p>
                        <p>
                            <span className='details-property'>Creator:</span>
                            <span className='details-content'> {pizza.creator?.username}</span>
                        </p>
                        <p>
                            <span className='details-property'>Published On:</span>
                            <span className='details-content'> {formatDate(pizza._createdOn)}</span>
                        </p>
                        <p>
                            <span className='details-property'>Size:</span>
                            <span className='details-content'> {pizza.size}</span>
                        </p>
                        <p>
                            <span className='details-property'>Ingredients:</span>
                            <span className='details-content'> {pizza.ingredients}</span>
                        </p>
                        <p>
                            <span className='details-property'>Description:</span>
                            <span className='details-content'> {pizza.description}</span>
                        </p>
                        {userId === pizza._ownerId && shownButtons && (
                            <div className='buttons'>
                                <Link to={pathToUrl(Paths.CustomPizzaEdit, { pizzaId })}> <button className="edit-button">Edit</button></Link>
                                <button onClick={handleShowButtons} className="delete-button">Delete</button>
                            </div>)}

                        {shownDelete && <div>
                            <p className="confirm-deletion">Are you sure you want to permanently delete that pizza?</p>
                            <button onClick={deleteHandler} className="confirm-delete">YES</button>
                            <button onClick={onClickCloseHandler} className="not-confirm-delete">NO</button>
                        </div>}
                    </div>
                </section >


                <section className='comments-section'>
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {comments.map(({ _id, content, creator: { username }, _createdOn }) => (
                                <li key={_id} className="comment">
                                    <p>Username: {username}</p>
                                    <p>{content}</p>
                                    <p className='date'>{formatDateTime(_createdOn)}</p>
                                </li>))}
                        </ul>
                        {comments.length === 0 && (<p className="no-comment">No comments yet.</p>)}
                    </div>


                    <article className="create-comment">
                        <label>Add your comment:</label>
                        <form className="form" onSubmit={onSubmitCreateComment}>
                            <textarea name="content" cols="80" rows="5" value={comment.content} placeholder="Write your comment..." onChange={onChangeComment} ></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </article>
                </section>

            </div>


        </>
    )
};
