
import '../CustomPizzaDetails.css'

import SingleComment from "./SingleComment";

export default function CustomPizzaComments({
    comments,
    onChangeComment,
    onSubmitCreateUpdateComment,
    comment,
    onEditContent,
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
                        />
                    ))}
                </ul>
                {comments.length === 0 && (<p className="no-comment">No comments yet.</p>)}
            </div>

            <article className="create-comment">
                <label>Add your comment:</label>
                <form className="form" onSubmit={onSubmitCreateUpdateComment}>
                    <textarea name="content" cols="80" rows="5" value={comment.content} placeholder="Write your comment..." onChange={onChangeComment} ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}