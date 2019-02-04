import Head from "../components/Head";
import List from '../components/List';
import Link from "next/link";

export default () => {
    return (
        <Head title='Next.js Todo List!'>
            <h1 className="text-center">Next Todo List 💩</h1>
            <List />
            <div className="nav-buttons">
                <Link href="/new">
                    <button className="btn btn-primary">New Todo List</button>
                </Link>
            </div>
        </Head>

    )
};