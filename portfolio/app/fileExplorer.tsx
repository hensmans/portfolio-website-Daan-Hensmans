
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './css/global.css';
import fileExplorerStyles from './css/fileExplorer.module.css';
import ProjectOverview from './projectOverview';
import Image from "next/image";
import ReadMeOverview from './readmeOverview';
import PicturesOverview from './picturesOverview';


const fileIcons = {
    // Files
    generic: 'Generic Document',
    lowLevel: 'project',
    creative: 'project',
    picture: 'picture',
    constructs: 'project',
    undefined: 'Registry Editor',
    readme: 'text',

    // Folders
    folderOpened: 'Folder Closed',
    localDisk: 'Local Disk',
    projects: 'projects',
    pictures: 'pictures',
}


const items = [
    {
        folderName: 'root',
        folderFiles: [
            { id: 0, label: 'README.md' }
        ],
        icon: fileIcons.readme,
    },
    {
        folderName: 'games',
        folderFiles: [
            { id: 1, label: 'Dr Mario' },
            { id: 2, label: 'Worm' },
            { id: 3, label: 'Desert Explorer' },
            { id: 4, label: 'Train App' },
            { id: 5, label: 'Pixel Simulator' }
        ],
        icon: fileIcons.generic,
    },
    {
        folderName: 'low level',
        folderFiles: [
            { id: 10, label: 'HPC in C' },
            { id: 11, label: 'OpenCL' },
            { id: 12, label: 'OpenGL' },
            { id: 13, label: 'EmFRP Compiler' },
            { id: 14, label: 'Interpreter' },
        ],
        icon: fileIcons.generic,
    },
    {
        folderName: 'creative',
        folderFiles: [
            { id: 21, label: 'This Site' },
            { id: 22, label: 'Photography' },
            { id: 23, label: 'YouTube' },
        ],
        icon: fileIcons.generic,
    },
    {
        folderName: 'constructs',
        folderFiles: [
            { id: 31, label: 'Parallellism' },
            { id: 32, label: 'Database' },
            { id: 33, label: 'Multicore' },
            { id: 34, label: 'Web Security' },
        ],
        icon: fileIcons.generic,
    },

    {
        folderName: 'pictures',
        folderFiles: [
            { id: 101, label: 'tree.png' },
            { id: 102, label: 'frog.png' },
        ],
        icon: fileIcons.generic,
    },
];

// If project hasn't been declared yet
const undefinedProject =
{
    id: -1,
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
        youtubeId: undefined,
        pictures: [],
    }
};
const projectsContent = [
    // Readme
    {
        id: 0,
        content: {
            title: 'Projects',
            tags: [],
            description: [
                "Here my most notable projects are shown. Every project will give a quick overview what it was about, what language(s) I used, what I learned, and some pictures and maybe even a video.",
                "There are multiple folders where the type of the project is grouped. Select any folder to open or close it.",
                "",
                "The following folders include:"
            ],
            bulletPoints: [
                "games",
                "Some fun visual projects where multitude of programming concepts are implemented into games",
                "low level",
                "Projects that are about low level code and OS level",
                "constructs",
                "Not-so-visual projects that are more focused or certain programming concepts and patterns",
                "creative",
                "Creative hobbies that helped develop my creative mind",
            ],
            youtubeId: "",
            pictures: []
        }
    },

    // Games
    {
        id: 1,
        content: {
            title: 'Dr Mario',
            tags: ['C', '2022', 'GitHub'],
            description: [
                "Multiple viruses have appeared in the screen, and it is your goal to remove them by having four or more colours in a row. Sometimes a bomb drops and that will explode the surounding blocks if it touches something. You win if every virus in the board is gone. But watch out, every next game it becomes more difficult. More viruses will appear, the pills will fall quicker, and the screen becomes larger.",
                "The high-score will be saved locally and it is possible to select of four gamemodes at the menu. Sounds also have been implemented to have a more enjoyable and engaging experience. The palyer controls the game by tilting the device for horizontal and vertical movement, and the button to rotate the pill.",
                "This has been made on an embeded device, the m5 stick. This stick has a gyroscope, screen, buttons and a speaker. It is programmed in C with the goal of creating a Dr Mario game where the memory usage is as small as possible ",
            ],
            bulletPoints: [
                "C and its memory properties (pointers, (de-)allocation, stack)",
                "Programming on embeded devices",
                "Managing physical inputs",
                "Memory optimisations",
            ],
            youtubeId: "10AdEqDX_T8",
            pictures: ["dr_mario_2.jpg", "dr_mario_1.jpg"]
        }
    },
    {
        id: 2,
        content: {
            title: 'Worm',
            tags: ['ASM x86', '2022', 'GitHub'],
            description: [
                "You are a worm with an empty stumach. The goal is to eat some yummy yellow food, and if you do, you grow. But watch out you dont eat yourself or hit lava, or you die.",
                "This game has been fully made in Assembly x86 with the goal of having the memory consumption as small as possible. This is done by only using parts of registers to use the smallest amount of bits. The lava pools, food location and start position are all pseudo randomly generated."
            ],
            bulletPoints: [
                "Programming in Assembly x86",
                "Working with registers and CPU instructions",
                "Low level memory management",
            ],
            youtubeId: "4CJKe73SVr0",
            pictures: ["worm_1.jpg"],
        }
    },
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
            youtubeId: "WST_O-ba_MI",
            pictures: ["desert_explorer_1.jpg"],
        }
    },
    {
        id: 4,
        content: {
            title: 'Train App',
            tags: ['Scheme', '2023', 'GitHub'],
            description: [
                "There are train tracks and trains. The tracks has switches and detectionblocks. The user is in possession of an app where it can control the train its speed and direction. With this app it is also possible to change the switches and see what trains are on what detectionblocks. The user can also say a location the train needs to go to. If this happens, then the train calculates a path and will go there, even if it needs to change its direction multiple times",
                "This back-end and fron-end is fully made in Scheme and works on a real life track and on a train simulation. The front-end was the client and GUI, while the back-end was to calculate the path algorithm, abd store states of the trains and tracks. The communication between the two happens through a TPC connection. The clients will run asynchrounously, and all the clients will update automatically if one client changes states or values."
            ],
            bulletPoints: [
                "Back-end and front-end seperation",
                "Client synchronisation",
                "GUI construction",
                "TPC",
            ],
            youtubeId: "PWt333RWpQg",
            pictures: ["train_app_1.jpg"],
        }
    },
    {
        id: 5,
        content: {
            title: 'Pixel Simulator',
            tags: ['Scheme', '2025', 'GitHub'],
            description: [
                "Pixel phsycis simulator where it is possible to draw glass, sand, lava, wood, ,acid, steam, water, and stone on a GUI. The elements will interact with eacherother. For example, lava can melt stone and after a while it becomes stone again. Acid can melt through certain materials, and the speed depends on what materials. Sand turns into glass if it touches lava, and water into steam. Water and lava will flow in different speeds.",
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    // Low level
    {
        id: 10,
        content: {
            title: 'HPC in C',
            tags: ['C', '2025', 'GitHub'],
            description: [
                "Optimizing C programs by implementing multiple techniques. like; parallelisation, optimizing the datatypes, changing memory access order, changing sequential code into code that can be ran parallel",
                "Also debugging in C and Assembly",
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 11,
        content: {
            title: 'OpenCL',
            tags: ['C', '2025', 'GitHub'],
            description: [
                "Executing kernels on the CPU"
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 12,
        content: {
            title: 'OpenGL',
            tags: ['C++', '2025', 'GitHub'],
            description: [
                "Creatign shaders, working on the GPU"
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 13,
        content: {
            title: 'EmFRP Compilter',
            tags: ['Scheme', '2024', 'GitHub'],
            description: [
                "Bachelor thesis where the goal was to create a compiler for the reactive programming language EmFRP. The compiler would compile source code into  byte-code for the virtual machine Remus"
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 14,
        content: {
            title: 'Interpreter',
            tags: ['Scheme', '2024', 'GitHub'],
            description: [
                "Extending an interpeter that only accepts a functional programming language into an interpreter that accpets an object oriented programming language"
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    // Creative
    {
        id: 21,
        content: {
            title: 'This Site',
            tags: ['NextJS', '2025', 'GitHub'],
            description: [
                "Windows XP inspired website. Created with NextJS from scratch.",
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 22,
        content: {
            title: 'Photography',
            tags: ['2024 - now'],
            description: [
                "photography. See more in the pictures folder:)",
            ],
            bulletPoints: [
                "Adobe Lightroom",
                "Colour theory",
                "Composition",
                "Creativity"
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 23,
        content: {
            title: 'YouTube',
            tags: ['2013 - 2021'],
            description: [
                "YouTube account with [REDACTED] subscribers",
            ],
            bulletPoints: [
                "Adobe Premiere Pro",
                "Adobe Photoshop",
                "Interpreting audience preference and changing to create better view rate",
                "Creativity",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },

    // Constructs
    {
        id: 31,
        content: {
            title: 'Parallelism',
            tags: ['C', '2024'],
            description: [
                "Creating a parallel program given a sequential program. This is then ran on a super computer through a server on different amount of threads and cutoffs. The times are measured, analysed and a result is concluded"
            ],
            bulletPoints: [
                "Analysing data for better optimisations and refining parameters",
                "Parallelisation",
                "Concurrency",
                "Servers",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 32,
        content: {
            title: 'Database',
            tags: ['', ''],
            description: [
                "idk if this is needed ?s"
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 33,
        content: {
            title: 'Multicore',
            tags: ['', ''],
            description: [
                "idk if this is needed ?"
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },
    {
        id: 34,
        content: {
            title: 'Web Security',
            tags: ['React', '2024'],
            description: [
                "Transforming an unsecure web chat application into a secure one through multiple security patterns. The chat application also got transformed into an End-to-end encryption (E2EE)."
            ],
            bulletPoints: [
                "NaN",
            ],
            youtubeId: undefined,
            pictures: [],
        }
    },


]

interface Parameters {
    // For taggling max and min state
    setIconName: Dispatch<SetStateAction<string>>;
    setTitleName: Dispatch<SetStateAction<string>>;
    projectsFolderOpenInit: boolean;
}



const FileExplorer = ({ setIconName, setTitleName, projectsFolderOpenInit }: Parameters) => {


    const handleClick = (id: number, icon: string, title: string) => {
        setSelectedFile(id);
        setIconName(icon);
        setTitleName(title);
        console.log("Item clicked:", id);
        // Perform action: e.g., router.push(`/items/${id}`)
    };

    const generateFolderContent = (folderName: string) => {
        const folder = items.find(entry => entry.folderName === folderName);
        return (
            folder?.folderFiles.map((file) => (
                <li
                    key={file.id}
                    onClick={() => handleClick(file.id, folder.icon, file.label)}
                    className={`${fileExplorerStyles.treeElement} clickable ${selectedFile === file.id ? `${fileExplorerStyles.fileActive}` : ''}`}
                >
                    <Image src={`/icons/${folder.icon}.png`}
                        alt={`Popup icon`}
                        fill
                        priority // preloads
                        className={`${fileExplorerStyles.icon}`}
                    />
                    <span>{file.label}</span>
                </li>
            ))
        );
    }

    const generateFolderSummary = (icon: string, title: string) => {
        return (
            <summary className={`${fileExplorerStyles.treeElement} clickable`}>
                <Image src={`/icons/${icon}.png`}
                    alt={`Popup icon`}
                    fill
                    priority // preloads
                    className={`${fileExplorerStyles.icon}`}
                />
                <span>{title}</span>
            </summary>
        );
    }

    const generateFolder = (openBoolInit: boolean, title: string, fileName: string, folderIcon?: string) => {
        return (
            <details open={openBoolInit}>
                {generateFolderSummary(folderIcon ? folderIcon : fileIcons.folderOpened, title)}
                <ul>
                    {generateFolderContent(fileName)}
                </ul>
            </details>
        );
    }



    const getContent = (id: number) => {
        const project = projectsContent.find(project => project.id === id) ?? undefinedProject;
        return project.content;
    }

    // Readme is selected if projects folder is opened, otherwise the picture folder
    const [selectedFile, setSelectedFile] = useState(projectsFolderOpenInit ? 0 : 100);
    const [projectContent, setProjectContent] = useState(getContent(selectedFile));

    useEffect(() => {
        setProjectContent(getContent(selectedFile));
    }, [selectedFile]);

    return (
        <div className={`${fileExplorerStyles.layout}`}>
            <ul className={`${fileExplorerStyles.tree} noSelect`}>
                <li >
                    <details open>
                        {generateFolderSummary(fileIcons.localDisk, 'Local Disk (C:)')}
                        <ul>
                            <details open={projectsFolderOpenInit}>
                                {generateFolderSummary(fileIcons.projects, 'projects')}
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
                        <ul onClick={() => handleClick(100, fileIcons.pictures, 'pictures')}>
                            {generateFolder(!projectsFolderOpenInit, 'pictures', 'pictures', fileIcons.pictures)}
                        </ul>
                    </details>
                </li>
            </ul>
            {selectedFile == 0
                ? <ReadMeOverview content={projectContent} />
                :
                selectedFile == 100
                    ? <PicturesOverview content={projectContent} />
                    : <ProjectOverview content={projectContent} />}

        </div>

    );
}
export default FileExplorer;

