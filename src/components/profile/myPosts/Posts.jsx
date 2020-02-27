import React from 'react';
import d from './Posts.module.css';
import Post from './post/Post.jsx'
import { ADD__POST, CHANGE__STATE } from '../../../redux/state';
const Posts = (props) => {
    
    let postEllement = React.createRef();
    let onChange = () => {
        let text = postEllement.current.value;
        //    props.changeState(text)      
        props.dispatch( CHANGE__STATE(text) )
    }
    let addPost = () => {
        //    props.addPost()
        props.dispatch( ADD__POST() )
    }

    const postItem = props.posts.posts.map(content => (<Post id={content.id}
        massedge={content.massedge} like={content.like} img={content.img} />));

    return (
        <div className={d.posts}>
            <h2>Ваши посты</h2>
            <div>
                <input type="textarea" ref={postEllement}
                    onChange={onChange} value={props.posts.placeholder}
                />
                <button onClick={addPost}>Отправить</button>
                <button >Удалить</button>
            </div>
            {postItem}
        </div>
    )

}

export default Posts;