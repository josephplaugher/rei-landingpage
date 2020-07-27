import React from 'react'
import 'scss/main.scss'
import 'scss/main-desktop.scss'
import 'scss/main-mobile.scss'

const Home = () => (
    <>
        <h1 className="headline">
            We Solve Business Process Problems Through Software
        </h1>
        <h2 className="subheadline">Improve Efficiency</h2>
        <p className="text">
            You and your staff are probably doing a lot of things manually that
            can be automated. Let us help you reduce these inefficiencies in
            your workflow to improve upon your existing processes.
        </p>
        <h2 className="subheadline">Cut Costs</h2>
        <p className="text">
            If you're not fully leveraging software, you're losing money. You
            can empower your staff to streamline their work and accomplish more
            in less time.
        </p>
        <h2 className="subheadline">Expand Without Increasing Labor Costs</h2>
        <p className="text">
            Do you need to hire more staff to expand your business? Maybe not!
            With your staff's days less consumed by routine, tedious tasks,
            they'll have more time for effective and productive work. They'll be
            happier, and your bottom line will benefit.
        </p>
    </>
)

export default Home
