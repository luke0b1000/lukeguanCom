import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import www_icon from '../assets/www_icon.png';
import github_circle from '../assets/github_circle.png';

import img_my_reads from '../assets/projects/my_reads.png';
import img_would_you_rather from '../assets/projects/would_you_rather.png';
import img_mathPlay from '../assets/projects/mathPlay.png';
import img_learnMath from '../assets/projects/learnMath.png';
import img_ChineseStream from '../assets/projects/ChineseStream.png';
import img_udacityCards from '../assets/projects/udacityCards.png';
import img_lukeguanCom from '../assets/projects/lukeguanCom.png';
import img_readables from '../assets/projects/readables.png';
import img_amazon_new_releases from '../assets/projects/amazon_new_releases.png';

const projectModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '70%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const projectLists = [
    'myReads',
    'would_you_rather',
    'mathPlay',
    'learnMath',
    'ChineseStream',
    'udacityCards',
    'lukeguanCom',
    'readables',
    'amazon_new_releases',
];
const projectListsState = projectLists.reduce((accumulator, element) => {
    accumulator[element] = false;
    return accumulator;
}, {});
const projectObject = {
    myReads: {
        title: 'My Reads',
        img: img_my_reads,
        website: 'https://d16kals0zf7zhq.cloudfront.net/',
        github: 'https://github.com/luke0b1000/udacity_myReads',
        description: [
            <p>Udacity React Nanodegree course (Project 1) </p>,
            <p>
                In the MyReads project, I've create a bookshelf app that allows
                you to select and categorize books you have read, are currently
                reading, or want to read.
            </p>,
            <p>
                This web application was the first project from the Udacity
                course. The book data is fetched asynchronously from Udacity
                API. It loads your books into 3 bookshelf read, want to read,
                and currently reading. You can add books to the different
                bookshelves, and move books across the different bookshelves.
            </p>,
            <p>
                I learned about React states and that sites will rerender on a
                state change. I now understand how to create responsive dynamic
                sites with react-router-dom.
            </p>,
            <p>
                A CloudFormation template was used to take code from my github
                which then feeds to code pipeline and build using EC2 and stored
                into S3. CloudFront was added as an overlay to give better a
                user experience.
            </p>,
        ],
        techStack: 'AWS, CSS, HTML, JavaScript, React',
    },
    would_you_rather: {
        title: 'Would You Rather?',
        img: img_would_you_rather,
        website: 'https://d2zhz99rvuohrk.cloudfront.net/',
        github: 'https://github.com/luke0b1000/udacity_WouldYouRather',
        description: [
            <p>Udacity React Nanodegree course (Project 2)</p>,
            <p>
                A user can login and submit responses to the number of different
                Would You Rather questions that have been asked. A user can also
                ask new questions to be answered.
            </p>,
            <p>
                The application uses React with Redux. Implement different redux
                store so that different React components can retrieve the
                application state and render in real time.
            </p>,
            <p>
                A CloudFormation template was used to take code from my github
                which then feeds to CodePipeline and build using EC2 and stored
                into S3. CloudFront was added as an overlay to give a better
                user experience.
            </p>,
        ],
        techStack: 'AWS, CSS, HTML, JavaScript, React, Redux',
    },
    mathPlay: {
        title: 'Math Play',
        img: img_mathPlay,
        website: 'https://d1fww7kckx4zwq.cloudfront.net/',
        github: 'https://github.com/luke0b1000/aws_mathPlay',
        description: [
            <p>
                The objective is to practice math. Random numbers are generated
                for the desired mathematical operand for the user to answer. The
                number and symbol are displayed using MathJax.
            </p>,
            <p>
                A CloudFormation template was used to take code from my github
                which then feeds to CodePipeline and build using EC2 and stored
                into S3. CloudFront was added as an overlay to give a better
                user experience.
            </p>,
        ],
        techStack: 'AWS, CSS, HTML, JavaScript, React, Redux',
    },
    learnMath: {
        title: 'Learn Math',
        img: img_learnMath,
        website: 'http://peppermint-lamp.s3-website-us-east-1.amazonaws.com/',
        github: 'https://github.com/luke0b1000/learnMath',
        description: [
            <p>
                A site to practice basic arithmetic and keep track of the user's
                progress. I started creating this site with intention of
                answering the questions inside chrome developer tools.
            </p>,
            <p>
                It uses JavaScript console.log to present the questions and
                functions to answer the questions. I then used jQuery to create
                HTML and DOM elements based on the internal functions. The next
                step was to create a React version, which is what spawn Math
                Play. The next version with be in React Native.
            </p>,
        ],
        techStack: 'AWS S3, CSS, HTML JavaScript',
    },
    ChineseStream: {
        title: 'Chinese Stream',
        img: img_ChineseStream,
        website:
            'https://play.google.com/store/apps/details?id=com.lukeguan.chinese_stream',
        github: 'https://github.com/luke0b1000/chineseStream',
        description: [
            <p>
                Since I routiney listen to streaming Chinese radio. I deced to
                create an app that facilitates that. I use the expo API to
                interface with internet radio stations. This was my first
                attempt at Internationalization (i18n), with the language
                defaulting to Traditional Chinese with the option to switch to
                English. This app is currently available on the Google Play
                Store. I will deploy to Apple App Store when I have a few more
                apps.
            </p>,
            <p>
                *Personally I have also automated capturing the streams of the
                radio stations and splitting them up by the hour and uploading
                to Google Drive for offline listening.
            </p>,
        ],
        techStack: 'React Native, Android, iOS',
    },
    udacityCards: {
        title: 'Udacity Cards',
        img: img_udacityCards,
        website: 'https://expo.io/@lukeguan/udacity_flashcards',
        github: 'https://github.com/luke0b1000/udacity_flashcards',
        description: [
            <p>Udacity React Nanodegree course (Project 3)</p>,
            <p>
                For the UdaciCards project, I built a mobile application that
                allows the user to study collections of flashcards. This app
                will allow user to create different categories of flashcards
                called "decks", add flashcards to those decks, then take quizzes
                on those decks.
            </p>,
        ],
        techStack: 'React Native, Android, iOS',
    },
    lukeguanCom: {
        title: 'LukeGuan.com',
        img: img_lukeguanCom,
        website: 'https://lukeguan.com',
        github: 'https://github.com/luke0b1000/lukeguanCom',
        description: [
            <p>My personal website to display my projects</p>,
            <p>
                A CloudFormation template was used to take code from my github
                which then feeds to CodePipeline and build using EC2 and stored
                into S3. CloudFront was added as an overlay to give a better
                user experience.
            </p>,
        ],
        techStack: 'AWS, CSS, HTML, JavaScript, React, Redux',
    },
    readables: {
        title: 'Readables',
        img: img_readables,
        github: 'https://github.com/luke0b1000/udacity_Readables',
        description: [
            <p>
                Udacity React Nanodegree course (Project 2, extra-credit
                [optional])
            </p>,
            <p>
                Users will be able to post content to predefined categories,
                comment on their posts and other users' posts, and vote on posts
                and comments. Users will also be able to edit and delete posts
                and comments. The objective was to emulate a simple version of
                Reddit/Hacker News. Udacity setup a local backend server
                (https://github.com/udacity/reactnd-project-readable-starter)
                that emulated a remote API. The goal was to combine React with
                Redux to mimic requests to the API for data. I started by
                creating the site with very little redux and was heavy on
                requesting the data live. I learned quite a bit about the role
                of Redux without implementing Redux. I then progressed to
                implementing Redux as required by the course.
            </p>,
        ],
        techStack: 'AWS, CSS, HTML, JavaScript, React, Redux',
    },
    amazon_new_releases: {
        title: 'Amazon New Releases',
        img: img_amazon_new_releases,
        description: [
            <p>
                This website displayed what Amazon was newly releasing during
                the week selected, seperated into categories, DVD, Books, Music,
                Games.
            </p>,
            <p>
                At first, I used Amazon API protocols to retrieve the data and
                store it into MySQL. PHP was used as both backend and frontend
                to display the items that were being released that week.
            </p>,

            <p>
                Eventually I switched to using a webcrawler SCRAPY to crawl
                Amazon.com for newly released items and store them in mongoDB.
                The django web framework was used as the frontend to display the
                new items.
            </p>,
        ],
        techStack: 'PHP, MySQL, Django, mongoDB, CSS, HTML',
    },
};
class MyProjects extends Component {
    state = {
        ...projectListsState,
    };
    openProjectModal = projectID => {
        this.setState({ [projectID]: true });
    };
    closeProjectModal = projectID => {
        this.setState({ [projectID]: false });
    };
    eachProject = projectID => {
        return (
            <article key={projectID} className="project-box">
                <a
                    href={`#${projectID}`}
                    onClick={() => this.openProjectModal(projectID)}
                >
                    <div className="container">
                        <img
                            className="image"
                            src={projectObject[projectID].img}
                            alt={projectID}
                        />
                        <div className="middle">
                            <div className="mytext">
                                {projectObject[projectID].title}
                            </div>
                        </div>
                    </div>
                </a>
                <Modal
                    isOpen={this.state[projectID]}
                    onRequestClose={() => this.closeProjectModal(projectID)}
                    style={projectModalStyles}
                    ariaHideApp={false}
                >
                    <h1>{projectObject[projectID].title}</h1>
                    {projectObject[projectID].website ? (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={projectObject[projectID].website}
                        >
                            <img src={www_icon} alt="www_icon" />
                        </a>
                    ) : null}
                    {projectObject[projectID].github ? (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={projectObject[projectID].github}
                        >
                            <img src={github_circle} alt="github_circle" />
                        </a>
                    ) : null}
                    <p>{projectObject[projectID].description}</p>
                    <p className="techStack">
                        {projectObject[projectID].techStack}
                    </p>
                </Modal>
            </article>
        );
    };
    render() {
        const showProject = projectLists.map(element => {
            return this.eachProject(element);
        });
        return (
            <Fragment>
                <div className="projects-title">My Projects</div>
                <div className="projects">{showProject}</div>
            </Fragment>
        );
    }
}

export default MyProjects;
