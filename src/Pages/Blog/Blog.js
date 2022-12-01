import React from 'react';

const Blog = () => {
    return (
        <div className='p-10 m-4 mb-4'>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box m-4">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways manage a state in a React application?
                </div>
                <div className="collapse-content  ">
                    <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.

                        svg viewer

                        The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

                        Hooks
                        React Context API
                        Apollo Link State
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box  m-4">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content  ">
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box  m-4">
                <div className="collapse-title text-xl font-medium">
                    What is unit test? why should we write unit test?
                </div>
                <div className="collapse-content  ">
                    <p>Unit tests are an early stage phase of testing that positively impacts the robustness and reliability of software: developers who don’t unit test usually face a significantly higher volume of bugs and software failures. Even though spending more time and resources on unit testing feels like a direct negative impact on the capacity to lead the project to its goal under time and resource constraints, it usually aids in the successful execution of the project. Here are 4 specific dimensions which benefit from unit tests that are recognised by software developers:

                        It helps to drive the design of a feature and gain architectural clarity. Developers are forced to put the specifications of the function they are trying to write into code, and to think in terms of scenarios - which helps early detection of potential issues.
                        It makes it extremely easy to spot and avoid regressions, thus giving developers confidence that their new feature does not risk breaking some pre-existing behaviors of their program. Being more confident also allows them to build better software architectures.
                        It is a quality assurance practice that overall tends to significantly raise the robustness of the code that makes it to production, by highlighting mistakes that would jeopardize the code execution or compilation. Of course, the obvious consequences of this are fewer bugs and happier users.
                        Good unit tests also effectively function as pieces of documentation by describing the expected behavior of a unit of code in different scenarios. These are also valuable sources of information to support refactoring and restructuring efforts.
                        The ripple effect of unit testing described above impacts the success of a project by reducing unexpected errors and resources dedicated to fixing as well as increasing the success of the software amongst end users.

                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box  m-4">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. VUE
                </div>
                <div className="collapse-content  ">
                    <p>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                        If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.

                        Angular vs React vs Vue
                        Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at!

                        * In this post, we assume that you have basic knowledge of JavaScript and have used JavaScript frameworks as well.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;