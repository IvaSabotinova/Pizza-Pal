
import '../CustomPizzaDetails.css'

import SingleComment from "./SingleComment";

export default function CustomPizzaComments({
    comments,
    onChangeComment,
    onSubmitCreateUpdateComment,
    comment,
    onEditContent,
    error,
    validateComment,
    onDeleteComment
}) {

    return (
        <section className='comments-section'>
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(x => (
                        <SingleComment
                            key={x._id}
                            comment={x}
                            onEditContent={onEditContent}
                            onDeleteComment={onDeleteComment}
                        />
                    ))}
                </ul>
                {comments.length === 0 && (<p className="no-comment">No comments yet.</p>)}
            </div>

            <article className="create-comment">
                <label>Add your comment:</label>
                <form className="form" onSubmit={onSubmitCreateUpdateComment}>
                    <textarea name="content" cols="80" rows="5" placeholder="Write your comment..."
                        value={comment.content}
                        onChange={onChangeComment}
                        onBlur={validateComment}
                    ></textarea>
                    {error !== '' && <p className="errorMessage">{error}</p>}
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}