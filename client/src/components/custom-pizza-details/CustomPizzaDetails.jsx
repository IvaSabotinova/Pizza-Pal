import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import './CustomPizzaDetails.css'

import * as customPizzaService from '../../services/customPizzaService';
import * as commentsService from '../../services/commentsService';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';
import { formatDate } from '../../utils/dateUtil'
import AuthContext from '../../contexts/AuthContext';

import CustomPizzaComments from './custom-pizza-comments/CustomPizzaComments';

const commentInitialValues = {
    _id: '',
    content: '',
    pizzaId: '',
    _ownerId: '',
    creator: { username: '' }
}

export default function CustomPizzaDetails() {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({});
    const [shownButtons, setShownButtons] = useState(true);
    const [shownDelete, setShownDelete] = useState(false);
    const navigate = useNavigate();
    const { userId, username, email } = useContext(AuthContext);
    const [comment, setComment] = useState(commentInitialValues);
    const [comments, setComments] = useState([]);
    const [editMode, setEditMode] = useState(false);


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

    const onSubmitCreateUpdateComment = async (e) => {
        e.preventDefault();

        if (editMode) {
            try {
                const updatedComment = await commentsService.updateComment(comment._id, comment);
                setComments(state => state.map(x => x._id === comment._id ? updatedComment : x));
                setEditMode(false);
                setComment(commentInitialValues);
            } catch (err) {
                console.log(err)
            }
        }
        else {
            try {
                const newComment = await commentsService.createComment(pizzaId, comment.content);
                console.log(newComment)
                newComment.creator = { username };
                setComments(state => ([...state, newComment]))
                setComment(commentInitialValues);
            } catch (err) {
                console.log(err)
            }

        }

    }

    const onEditContent = (editComment) => {
        setEditMode(true);
        setComment(editComment)
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
                        {(userId === pizza._ownerId || email === 'admin@abv.bg') && shownButtons && (
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

                < CustomPizzaComments
                    comments={comments}
                    onChangeComment={onChangeComment}
                    onSubmitCreateUpdateComment={onSubmitCreateUpdateComment}
                    comment={comment}
                    onEditContent={onEditContent}
                />
            </div>
        </>
    )
};
