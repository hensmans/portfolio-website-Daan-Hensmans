
import { useEffect, useState } from 'react';
import './css/global.css';
import projectsStyles from './css/projects.module.css';
import ProjectOverview from './projectOverview';

const Projects = () => {


    const items = [
        {
            folderName: 'root',
            folderFiles: [
                { id: 0, label: 'README.md' }
            ]
        },
        {
            folderName: 'games',
            folderFiles: [
                { id: 1, label: 'Dr Mario' },
                { id: 2, label: 'Worm' },
                { id: 3, label: 'Desert Explorer' },
                { id: 4, label: 'Dr Mario' },
                { id: 5, label: 'Train App' },
                { id: 6, label: 'Pixel Simulator' }
            ]
        },
        {
            folderName: 'low level',
            folderFiles: [
                { id: 10, label: 'HPC in C' },
                { id: 11, label: 'OpenCL' },
                { id: 12, label: 'OpenGL' },
                { id: 13, label: 'EmFRP Compiler' },
                { id: 14, label: 'Interpreter' },
            ]
        },
        {
            folderName: 'creative',
            folderFiles: [
                { id: 21, label: 'This Site' },
                { id: 22, label: 'Photography' },
                { id: 23, label: 'YouTube' },
            ]
        },
        {
            folderName: 'constructs',
            folderFiles: [
                { id: 31, label: 'Parallellism' },
                { id: 32, label: 'Database' },
                { id: 33, label: 'Multicore' },
                { id: 34, label: 'Web Security' },
            ]
        },
    ];


    const undefinedProject =
    {
        id: 1,
        content: {
            title: 'Undefined',
            tags: ['NaN', 'NaN', 'NaN'],
            description: [
                "NaN",
                "NaN"
            ],
            bulletPoints: [
                "NaN",
                "NaN",
                "NaN",

            ],
        }
    };
    const Projects = [
        {
            id: 3,
            content: {
                title: 'Desert Explorer',
                tags: ['Haskell', '2025', 'GitHub'],
                description: [
                    "You are a desert explorer, in search for gold. But you have limited amount of water, and therefore you need to drink something every n amount of steps.. or you will die. Not only can you die from dehydration, but also from lava and from worms that appear randomly. Once you are satisfied with the amount of gold you gathered, you can enter a portal to end the game. If the player feels tired it can save the game and load it for another play session.",
                    " The game is fully programmed in Haskell, a pure function programming language. There are many concepts incorperated in this game. To list a few; The map will go to infinity, and with the same seed it will also have the same tiles everytime. All the worms are ran on a different threads through Software Transactional Memory. Loading and saving the game is done through a parser and lexer. And the game logic consists heavely on a functional pattern, monads.",

                ],
                bulletPoints: [
                    "All the concepts of a pure functional language",
                    "Software transactional memory (STM)",
                    "Writing an parser and lexer to load and save the game state from/to a file",
                    "Pseudo random generation in a consistent way, given a seed",
                    "Monads",

                ],
            }
        }
    ]


    const generateFolderContent = (fileName: string) => {
        const folder = items.find(entry => entry.folderName === fileName);
        return (
            folder?.folderFiles.map((file) => (
                <li
                    key={file.id}
                    onClick={() => setSelectedFile(file.id)}
                    className={`${selectedFile === file.id ? `${projectsStyles.fileActive}` : ''}`}
                >
                    {file.label}
                </li>
            ))
        );
    }

    const generateFolder = (openBool: boolean, title: string, fileName: string) => {
        return (
            <details open={openBool}>
                <summary>{title}</summary>
                <ul>
                    {generateFolderContent(fileName)}
                </ul>
            </details>
        );
    }


    const getContent = (id: number) => {
        const project = Projects.find(project => project.id === id) ?? undefinedProject;
        return project.content;
    }

    // Readme is always selected
    const [selectedFile, setSelectedFile] = useState(0);

    const [projectContent, setProjectContent] = useState(getContent(selectedFile));

    useEffect(() => {
        console.log(" clickecddd ", selectedFile);
        setProjectContent(getContent(selectedFile));
    }, [selectedFile]);

    return (
        <div className={`${projectsStyles.layout}`}>
            <ul className={`${projectsStyles.tree} noSelect`}>
                <li >
                    <details open>
                        <summary>Local Disk (C:)</summary>
                        <ul>
                            <details open>
                                <summary>projects</summary>
                                <ul>
                                    {generateFolderContent('root')}
                                    <li >
                                        {generateFolder(true, 'games', 'games')}
                                        {generateFolder(false, 'low level', 'low level')}
                                        {generateFolder(false, 'constructs', 'constructs')}
                                        {generateFolder(false, 'creative', 'creative')}
                                    </li>
                                </ul>
                            </details>
                        </ul>
                    </details>
                </li>
            </ul>
            <ProjectOverview content={projectContent} />
        </div>

    );
}
export default Projects;

