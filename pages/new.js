import React from "react";
import Head from "../components/Head";
import Link from "next/link";

export default class New extends React.Component {
    render() {
        return (
            < Head >
                <h1>Add New Todo Item</h1>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Add New Todo" />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-lg btn-primary">Add New Todo</button>
                        <Link href="/">
                            <button className="btn btn-lg btn-danger">Cancel</button>
                        </Link>
                    </div>

                </form>
            </Head >
        )
    }

}