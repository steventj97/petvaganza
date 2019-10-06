import React, { Component } from 'react'
import { Button } from 'antd';
import {Link} from 'react-router-dom'

class main extends Component {
    render() {
        return (
            <div>
                <h1>this is main page</h1>
                <Link to="/home">
                    <Button>Show the home</Button>
                </Link>
                <Link to="/intro">
                    <Button>Show the intro</Button>
                </Link>
            </div>
        )
    }
}

export default main;