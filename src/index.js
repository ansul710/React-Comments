import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {

    // let img = faker.image.avatar

    return (

        <div className="ui container comments">
            <ApprovalCard>            
                <CommentDetail author='Alex' img_src={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='newAlex' img_src={faker.image.avatar()} />
            </ApprovalCard>
        </div>

    );

}


ReactDOM.render(<App />, document.getElementById('root'))