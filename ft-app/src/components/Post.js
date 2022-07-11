const Post = ({name, goal, creator,}) => {
    return (
        <tr>
        <td>{name}</td>
        <td>{goal}</td>
        <td>{creator}</td>
        
         </tr> 
    )
}

export default Post;
