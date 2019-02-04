import Head from "../components/Head";

export default () => {
    return (
        <Head title='Next.js Todo List!'>
            <h1>Next Todo List</h1>
            <div className="todo-list">
                <h1>ToDO ITEM</h1>
            </div>
            <div className="nav-buttons">
                <button className="btn btn-primary">New Todo List</button>
            </div>
        </Head>

    )
};