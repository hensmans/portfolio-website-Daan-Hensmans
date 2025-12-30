
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
            // { id: 14, label: 'Interpreter' },
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
            // { id: 32, label: 'Database' },
            // { id: 33, label: 'Multicore' },
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
            tags: ['C', '2022', 'Embedded'],
            description: [
                "Multiple viruses have appeared on the screen and your goal is to remove them by creating groups of four or more of the same colour. Sometimes a bomb will drop, which will explode the surrounding blocks if it touches something. You win if you remove all the viruses on the board. But watch out, it gets more difficult with each subsequent game. More viruses will appear, the pills will fall more quickly and the screen will become expand.",
                "Your high score will be saved locally, and you can select from four game modes in the menu. Sounds have also been implemented to make the experience more enjoyable and engaging. Players control the game by tilting the device for horizontal and vertical movement and pressing the button to rotate the pill.",
                "This was created using an embedded device called the M5-Stick. This stick has a gyroscope, a screen, buttons, and a speaker.",
                "The game has been programmed in C with the aim of keeping memory usage to a minimum."
            ],
            bulletPoints: [
                "C and its memory properties (pointers, (de-)allocation, stack)",
                "Programming on embedded devices",
                "Managing physical inputs",
                "Memory optimisations",
            ],
            youtubeId: "10AdEqDX_T8",
            pictures: ["dr_mario_5.jpeg", "dr_mario_4.jpeg", "dr_mario_3.jpeg"]
        }
    },
    {
        id: 2,
        content: {
            title: 'Worm',
            tags: ['ASM x86', '2022'],
            description: [
                'You are a worm with an empty stomach. The goal is to eat some tasty yellow food; if you do, you grow. But watch out; if you eat yourself or touch lava, you die.',
                "This game has been fully created in Assembly x86 with the aim of using as little memory as possible. This is achieved by using only parts of the registers to use the smallest possible number of bits. The lava pools, food location and start position are all pseudo-randomly generated.",
            ],
            bulletPoints: [
                "Programming in Assembly x86",
                "Working with Registers and CPU Instructions",
                "Low-Level Memory Management",
            ],
            youtubeId: "4CJKe73SVr0",
            pictures: ["worm_2.jpeg"],
        }
    },
    {
        id: 3,
        content: {
            title: 'Desert Explorer',
            tags: ['Haskell', '2025', 'GitHub'],
            description: [
                "You are a desert explorer, in search for gold. But you have limited amount of water, and therefore you need to drink something every n amount of steps.. or you will die. Not only can you die from dehydration, but also from lava and from worms that appear randomly. Once you are satisfied with the amount of gold you gathered, you can enter a portal to end the game. If the player feels tired it can save the game and load it for another play session.",
                "The game is fully programmed in Haskell, a pure function programming language. There are many concepts incorperated in this game. To list a few; The map will go to infinity, and with the same seed it will also have the same tiles everytime. All the worms are ran on a different threads through Software Transactional Memory. Loading and saving the game is done through a parser and lexer. And the game logic consists heavely on a functional pattern, monads.",
            ],
            bulletPoints: [
                "All the concepts of a pure functional language",
                "Software transactional memory (STM)",
                "Writing an parser and lexer to load and save the game state from/to a file",
                "Pseudo random generation in a consistent way, given a seed",
                "Monads",
            ],
            youtubeId: "WST_O-ba_MI",
            pictures: ["desert_explorer_2.jpeg", "desert_explorer_3.jpeg", "desert_explorer_4.jpeg",],
        }
    },
    {
        id: 4,
        content: {
            title: 'Train App',
            tags: ['Scheme', '2023', 'GitHub'],
            description: [
                "There are train tracks and trains. The tracks have switches and detection blocks. The user has an app that controls the train's speed and direction. The app also allows the user to change the switches and see which trains are on which detection blocks. The user can also specify a destination for the train. The train will then calculate a path and go there, even if it needs to change direction multiple times.",
                "The back-end and front-end are fully made in Scheme and work on a real-life track and a train simulation. The front end was the client and GUI, while the back end calculated the path algorithm and stored the states of the trains and tracks. Communication between the two happens through a TCP connection. Clients run asynchronously and all clients update automatically if one client's state or values change.",
            ],
            bulletPoints: [
                "Back-end and front-end separation",
                "Client synchronisation",
                "GUI construction",
                "TPC",
            ],
            youtubeId: "PWt333RWpQg",
            pictures: ["train_app_2.jpeg", "train_app_3.jpeg", "train_app_4.jpeg"],
        }
    },
    {
        id: 5,
        content: {
            title: 'Pixel Simulator',
            tags: ['Scheme', '2025'],
            description: [
                "This is a pixel physics simulator where you can draw glass, sand, lava, wood, acid, steam, water and stone on a GUI. These elements will interact with each other. For example, lava can melt stone, which then reforms over time. Acid can melt certain materials, and the speed depends on the material. Sand turns into glass when it touches lava and water turns into steam. Water and lava flow at different speeds.",
                "Scheme (Lisp variant) was used to create it, but it was also recreated in C (this is not shown here)."
            ],
            bulletPoints: [
                "Physics simulation",
                "Relation-based interactions",
                "Optimisation of large-scale interactions"
            ],
            youtubeId: "NaW8FtBX2H8",
            pictures: ["pixel_simulator_1.jpeg", "pixel_simulator_2.jpeg", "pixel_simulator_3.jpeg"],
        }
    },
    // Low level
    {
        id: 10,
        content: {
            title: 'HPC in C',
            tags: ['C', 'ASM x86', '2025'],
            description: [
                "Optimising C programs by implementing multiple techniques, such as parallelisation, optimal data types and memory access order, and converting sequential code into code suitable for parallelisation.",
                "As part of the project, I learnt how to work with the debugger and gained an understanding of how the C compiler's various optimisation settings work. I also learnt how to analyse compiled assembly code and set breakpoints.",
                "These pictures show one of the sub-projects, in which a mathematical converging algorithm was applied to every pixel to produce the final image. The goal here was to optimise and parallelise this process.",
            ],
            bulletPoints: [
                "Debugging with debugger",
                "Efficient parallelisation",
                "Operating system optimisations",
                "Cache optimisations",
                "Linux and server terminal commands"
            ],
            youtubeId: undefined,
            pictures: ["HPC_2.jpg", "HPC_1.jpg"],
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
            tags: ['Scheme', '2024'],
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
            tags: ['NextJS', '2025'],
            description: [
                "This is the site you are looking at now. It is a Windows XP-inspired website that displays a monitor with a functioning Windows XP operating system.",
                "Built from scratch using Next.js and CSS."
            ],
            bulletPoints: [
                "NextJS",
                "Increased HTML and CSS skill",
                "Design and interaction",
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
                "One of my hobbies is photography, where I explore cities and nature and look for interesting shots. Some of my pictures are displayed in the 'pictures' folder",
                "This is not only relaxing for the mind, but it also encourages you to think more about composition, colours, coherence and order. This way of thinking helps you to learn what works and what doesn't, and these skills can also be transferred to front-end design."
            ],
            bulletPoints: [
                "Adobe Lightroom",
                "Color theory",
                "Composition",
                "Creativity"
            ],
            youtubeId: undefined,
            pictures: ["aboutme_2.png"],
        }
    },
    {
        id: 23,
        content: {
            title: 'YouTube',
            tags: ['2013 - 2021'],
            description: [
                "When I was younger, a hobby of mine was creating and managing videos for my YouTube channel. I've quit in the meantime, but it shaped me and taught me some important skills.",
                "The channel's content was about memes that were popular at the time. By engaging with and understanding the community and algorithm, I succeeded in gaining 600K subscribers and over 380 million views. These milestones put me in the top 100 YouTubers in Belgium.",
                "Thanks to the channel, I was able to build a community of over 4,000 Discord members. This taught me how to manage a large group of people, engage with them and create social bonds to increase activity.",
                "https://www.youtube.com/@Daaninator"
            ],
            bulletPoints: [
                "Adobe Premiere Pro",
                "Adobe Photoshop",
                "Interpreting audience preferences to improve view rates",
                "Creativity",
                "Managing a large community"
            ],
            youtubeId: undefined,
            pictures: ["yt_1.jpg", "yt_3.png", "yt_2.png",],
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

