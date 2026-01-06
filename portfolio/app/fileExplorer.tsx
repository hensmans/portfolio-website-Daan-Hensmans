
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './css/global.css';
import fileExplorerStyles from './css/fileExplorer.module.css';
import ProjectOverview from './projectOverview';
import Image from "next/image";
import ReadMeOverview from './readmeOverview';
import PicturesOverview from './picturesOverview';
import popupStyles from './css/popup.module.css';
import { StaticImageData } from 'next/image';

// Pictures and icons
import dr_mario_5 from '../assets/pictures/projects/dr_mario_5.webp';
import dr_mario_4 from '../assets/pictures/projects/dr_mario_4.webp';
import dr_mario_3 from '../assets/pictures/projects/dr_mario_3.webp';
import worm_2 from '../assets/pictures/projects/worm_2.webp';
import desert_explorer_2 from '../assets/pictures/projects/desert_explorer_2.webp';
import desert_explorer_3 from '../assets/pictures/projects/desert_explorer_3.webp';
import desert_explorer_4 from '../assets/pictures/projects/desert_explorer_4.webp';
import train_app_2 from '../assets/pictures/projects/train_app_2.webp';
import train_app_3 from '../assets/pictures/projects/train_app_3.webp';
import train_app_4 from '../assets/pictures/projects/train_app_4.webp';
import pixel_simulator_1 from '../assets/pictures/projects/pixel_simulator_1.webp';
import pixel_simulator_2 from '../assets/pictures/projects/pixel_simulator_2.webp';
import pixel_simulator_3 from '../assets/pictures/projects/pixel_simulator_3.webp';
import HPC_2 from '../assets/pictures/projects/HPC_2.webp';
import HPC_1 from '../assets/pictures/projects/HPC_1.webp';
import opencl_1 from '../assets/pictures/projects/opencl_1.webp';
import opencl_2 from '../assets/pictures/projects/opencl_2.webp';
import opengl_1 from '../assets/pictures/projects/opengl_1.webp';
import opengl_2 from '../assets/pictures/projects/opengl_2.webp';
import compiler_1 from '../assets/pictures/projects/compiler_1.webp';
import site_2 from '../assets/pictures/projects/site_2.webp';
import photo from '../assets/pictures/projects/photo.webp';
import yt_1 from '../assets/pictures/projects/yt_1.webp';
import yt_2 from '../assets/pictures/projects/yt_2.webp';
import yt_3 from '../assets/pictures/projects/yt_3.webp';
import parallel_1 from '../assets/pictures/projects/parallel_1.webp';
import parallel_2 from '../assets/pictures/projects/parallel_2.webp';
import parallel_3 from '../assets/pictures/projects/parallel_3.webp';
import e2ee_1 from '../assets/pictures/projects/e2ee_1.webp';
import e2ee_2 from '../assets/pictures/projects/e2ee_2.webp';

// Icons
import Generic_Document from '../assets/icons/Generic+Document.webp';
import Registry_Editor from '../assets/icons/Registry+Editor.webp';
import Game_Controller from '../assets/icons/Game+Controller.webp';
import Internet_Spades from '../assets/icons/Internet+Spades.webp';
import Internet_Backgammon from '../assets/icons/Internet+Backgammon.webp';
import Minesweeper from '../assets/icons/Minesweeper.webp';
import Chip from '../assets/icons/Chip.webp';
import Disk_Defragmenter from '../assets/icons/Disk Defragmenter.webp';
import XPS_Viewer from '../assets/icons/XPS+Viewer.webp';
import Services from '../assets/icons/Services.webp';
import Folder_View from '../assets/icons/Folder+View+-+Common+Tasks.webp';
import Digital_Camera from '../assets/icons/Digital Camera.webp';
import Camcorder from '../assets/icons/Camcorder.webp';
import picture from '../assets/icons/picture.webp';
import XSL from '../assets/icons/XSL.webp';
import Workgroup from '../assets/icons/Workgroup.webp';
import Virus_Protection from '../assets/icons/Virus+Protection.webp';
import text from '../assets/icons/text.webp';
import Folder_Closed from '../assets/icons/Folder+Closed.webp';
import Local_Disk from '../assets/icons/Local+Disk.webp';
import projects from '../assets/icons/projects.webp';
import pictures from '../assets/icons/pictures.webp';

// Photography pics
import alley from '../assets/pictures/photography/alley.webp';
import amusement from '../assets/pictures/photography/amusement.webp';
import balloons from '../assets/pictures/photography/balloons.webp';
import bench_fall from '../assets/pictures/photography/bench_fall.webp';
import bench_winter from '../assets/pictures/photography/bench_winter.webp';
import angle from '../assets/pictures/photography/angle.webp';
import house from '../assets/pictures/photography/house.webp';
import icy from '../assets/pictures/photography/icy.webp';
import ferry from '../assets/pictures/photography/ferry.webp';
import cabin from '../assets/pictures/photography/cabin.webp';
import boots from '../assets/pictures/photography/boots.webp';
import artic from '../assets/pictures/photography/artic.webp';
import crane from '../assets/pictures/photography/crane.webp';
import doozy from '../assets/pictures/photography/doozy.webp';
import moon from '../assets/pictures/photography/moon.webp';
import sunset from '../assets/pictures/photography/sunset.webp';
import gothenburg from '../assets/pictures/photography/gothenburg.webp';
import tunnel from '../assets/pictures/photography/tunnel.webp';
import copenhagen from '../assets/pictures/photography/copenhagen.webp';
import aurora from '../assets/pictures/photography/aurora.webp';
import night from '../assets/pictures/photography/night.webp';
import lapland from '../assets/pictures/photography/lapland.webp';

const fileIcons = {
    // Files
    generic: Generic_Document,
    game_1: Registry_Editor,
    game_2: Game_Controller,
    game_3: Internet_Spades,
    game_4: Internet_Backgammon,
    game_5: Minesweeper,

    lowLevel: Chip,
    openGL: Disk_Defragmenter,
    openCL: Chip,
    HPC: XPS_Viewer,
    compiler: Services,

    creative: Folder_View,
    camera: Digital_Camera,
    youtube: Camcorder,

    picture: picture,
    constructs: XSL,
    parallelism: Workgroup,
    security: Virus_Protection,

    undefined: Registry_Editor,
    readme: text,

    // Folders
    folderOpened: Folder_Closed,
    localDisk: Local_Disk,
    projects: projects,
    pictures: pictures,
}


const photographyPics: { name: string, picture: StaticImageData }[] = [
    { name: "alley", picture: alley },
    { name: "amusement", picture: amusement },
    { name: "angle", picture: angle },
    { name: "artic", picture: artic },
    { name: "aurora", picture: aurora },
    { name: "balloons", picture: balloons },
    { name: "bench_fall", picture: bench_fall },
    { name: "bench_winter", picture: bench_winter },
    { name: "boots", picture: boots },
    { name: "copenhagen", picture: copenhagen },
    { name: "crane", picture: crane },
    { name: "icy", picture: icy },
    { name: "gothenburg", picture: gothenburg },
    { name: "house", picture: house },
    { name: "tunnel", picture: tunnel },
    { name: "cabin", picture: cabin },
    { name: "ferry", picture: ferry },
    { name: "doozy", picture: doozy },
    { name: "sunset", picture: sunset },
    { name: "moon", picture: moon },
    { name: "night", picture: night },
    { name: "lapland", picture: lapland }
]

const items = [
    {
        folderName: 'root',
        id: undefined,
        folderFiles: [
            { id: 0, label: 'README.md' }
        ],
        icon: fileIcons.readme,
    },
    {
        folderName: 'games',
        id: undefined,
        folderFiles: [
            { id: 1, label: 'Dr Mario' },
            { id: 2, label: 'Worm' },
            { id: 3, label: 'Desert Explorer' },
            { id: 4, label: 'Train App' },
            { id: 5, label: 'Pixel Simulator' }
        ],
        icon: fileIcons.game_1,
    },
    {
        folderName: 'low level',
        id: undefined,
        folderFiles: [
            { id: 10, label: 'HPC in C' },
            { id: 11, label: 'OpenCL' },
            { id: 12, label: 'OpenGL' },
            { id: 13, label: 'EmFRP Compiler' },
            // { id: 14, label: 'Interpreter' },
        ],
        icon: fileIcons.lowLevel,
    },
    {
        folderName: 'creative',
        id: undefined,
        folderFiles: [
            { id: 21, label: 'This Site' },
            { id: 22, label: 'Photography' },
            { id: 23, label: 'YouTube' },
        ],
        icon: fileIcons.creative,
    },
    {
        folderName: 'constructs',
        id: undefined,
        folderFiles: [
            { id: 31, label: 'Parallellism' },
            // { id: 32, label: 'Database' },
            // { id: 33, label: 'Multicore' },
            { id: 34, label: 'Web Security' },
        ],
        icon: fileIcons.constructs,
    },

    {
        folderName: 'pictures',
        id: 100,
        folderFiles:
            photographyPics.map((pic, i) => ({
                id: 101 + i,
                label: `${pic.name}.png`
            })),

        icon: fileIcons.picture,
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
        icon: fileIcons.picture
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
            pictures: [],
            icon: fileIcons.generic
        }
    },

    // Games
    {
        id: 1,
        content: {
            title: 'Dr Mario',
            tags: ['C', 'Embedded Device', '2022',],
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
            pictures: [dr_mario_5, dr_mario_4, dr_mario_3],
            icon: fileIcons.game_5
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
            pictures: [worm_2],
            icon: fileIcons.game_2
        }
    },
    {
        id: 3,
        content: {
            title: 'Desert Explorer',
            tags: ['Haskell', 'Parallelisation', '2025'],
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
            pictures: [desert_explorer_2, desert_explorer_3, desert_explorer_4],
            icon: fileIcons.game_3
        }
    },
    {
        id: 4,
        content: {
            title: 'Train App',
            tags: ['Scheme', 'Full Stack', '2023'],
            description: [
                "There are tra,in tracks and trains. The tracks have switches and detection blocks. The user has an app that controls the train's speed and direction. The app also allows the user to change the switches and see which trains are on which detection blocks. The user can also specify a destination for the train. The train will then calculate a path and go there, even if it needs to change direction multiple times.",
                "The back-end and front-end are fully made in Scheme and work on a real-life track and a train simulation. The front end was the client and GUI, while the back end calculated the path algorithm and stored the states of the trains and tracks. Communication between the two happens through a TCP connection. Clients run asynchronously and all clients update automatically if one client's state or values change.",
            ],
            bulletPoints: [
                "Back-end and front-end separation",
                "Client synchronisation",
                "GUI construction",
                "TPC",
            ],
            youtubeId: "PWt333RWpQg",
            pictures: [train_app_2, train_app_3, train_app_4],
            icon: fileIcons.game_4
        }
    },
    {
        id: 5,
        content: {
            title: 'Pixel Simulator',
            tags: ['Scheme', 'C', '2025'],
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
            pictures: [pixel_simulator_1, pixel_simulator_2, pixel_simulator_3],
            icon: fileIcons.game_1
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
            pictures: [HPC_2, HPC_1],
            icon: fileIcons.HPC
        }
    },
    {
        id: 11,
        content: {
            title: 'OpenCL',
            tags: ['C', 'OpenCL', '2025'],
            description: [
                "You are given an image of blood cells and the goal is to count the number of cells. This is achieved by first converting the image to black and white, then applying the 'Union Find' algorithm, and finally assigning colours to each cell and outputting the final image showing the number of cells counted.",
                "Both converting the image and executing the 'Union Find' algorithm lend themselves well to parallelisation. Therefore, kernels are created for these steps to drastically improve the program's speed.",
                "Also, the execution time of the kernels and the data transfer to the GPU are measured to determine the optimal workgroup size and data type.",
                "Some other optimisation steps are also taken into account to minimise execution time. For example, the workgroup layout becomes square instead of linear (if you look at the 2D image). Or using the same data that is already loaded in the GPU to minimize data transfer.",
            ],
            bulletPoints: [
                "GPU kernels",
                "Kernel optimisation",
                "Data transfer and data type optimisation",
                "Transforming a sequential algorithm into a parallel algorithm.",
                "Measure execution time and derive for optimisations."
            ],
            youtubeId: undefined,
            pictures: [opencl_1, opencl_2],
            icon: fileIcons.openCL
        }
    },
    {
        id: 12,
        content: {
            title: 'OpenGL',
            tags: ['C++', 'OpenGL', '2025'],
            description: [
                "The goal was to implement shaders, textures, movement, and particles on a spaceship model. This was achieved step by step in OpenGL.",
                "Shaders are implemented using a shading algorithm that calculates the radiance and irradiance of each pixel. Textures are loaded and applied using texture maps. Particles have a spawn point and die after a certain time. Each particle has a 2D texture that imitates a fire effect. You can control the movement of the spaceship using the arrow keys. This is achieved by applying translation matrices to the model in its world view."],
            bulletPoints: [
                "Implementing reflections, shaders, textures, matrix transformations, and particles.",
                "Creating vertex and fragment shaders.",
                "Working and understanding Visual Studio.",
                "Understanding different views, such as the model view and the world view."
            ],
            youtubeId: undefined,
            pictures: [opengl_2, opengl_1],
            icon: fileIcons.openGL
        }
    },
    {
        id: 13,
        content: {
            title: 'EmFRP Compiler',
            tags: ['Compiler', 'Reactive Programming', '2024'],
            description: [
                "My bachelor's thesis focused on creating a compiler for a programming language called EmFRP. This language is reactive, meaning there is code that reacts to changes in external values. It is mainly used for research and embedded devices.",
                "The compiler will compile the code into a sequence of bytecode for the Remus virtual machine. This VM is used to execute a different reactive programming language, and the aim of the thesis was to establish whether it could also execute another reactive language.",
                "This is achieved by creating all the steps of the compiler: These include the parser, the lexer and the dependency graph constructor, which translates the AST (Abstract Syntax Tree) into a dependency graph. The compiler then compiles this dependency graph into a sequence of Remus bytecode.",
                "Optimilisations in the compiler are implemented to make it faster on the VM, like removing code duplication.",
                "After my bachelor's thesis, I took a course called 'Compilers' which taught me even more about compilers and all the important optimisation steps. The course involved a major project in which you had to implement a dozen of these compiler steps to create a simple functional programming language that was then compiled into Assembly x86."
            ],
            bulletPoints: [
                "Creating a compiler from scratch.",
                "Researching and finding information.",
                "Writing a clear, and detailed report.",
                "Compiler optimisations.",
                "Creating an assembler.",

            ],
            youtubeId: undefined,
            pictures: [compiler_1],
            icon: fileIcons.compiler
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
            icon: fileIcons.lowLevel
        }
    },
    // Creative
    {
        id: 21,
        content: {
            title: 'This Site',
            tags: ['NextJS', 'CSS', 'HTML', '2025'],
            description: [
                "This is the site you are looking at now. It is a Windows XP-inspired website displaying a monitor with a functioning Windows XP operating system. With as goal to get hired :-)",
                "Multiple optimisation techniques are used to load the site more quickly. Shaders and effects are used to create the unique Windows XP look and feel.",
                "The site has been built from scratch using Next.js and CSS, without the use of a template.",
            ],
            bulletPoints: [
                "NextJS",
                "HTML and CSS",
                "Interaction design",
            ],
            youtubeId: undefined,
            pictures: [site_2],
            icon: fileIcons.creative
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
            pictures: [photo],
            icon: fileIcons.camera
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
            pictures: [yt_1, yt_3, yt_2,],
            icon: fileIcons.youtube
        }
    },

    // Constructs
    {
        id: 31,
        content: {
            title: 'Parallelism',
            tags: ['C', 'Java', 'Erlang', '2024'],
            description: [
                "Over the years, I have created many applications that execute tasks in parallel or concurrently. Some of these programs include:",
                "The goal was to parallelise the execution of a query over a very large dataset (over 100 GB). A sequential query program was provided and the objective was to parallelise this algorithm efficiently. After creation, measurements were taken on different amounts of threads to decide the best sequential cutoff.",
                "Another project involved creating a Wikipedia server to which multiple user clients could connect and change or retrieve information simultaneously. Here, concurrency is applied to make server responses quicker. This is achieved by dividing Wikipedia articles into tupple spaces and allocating a thread to each tupple space.",
                "A third project involved constructing a scalable key-value store architecture. Clients can then make requests to the server regarding these key-values. This program is made scalable by allocating the keys to buckets that run on separate threads. Other optimisations used include creating new buckets automatically, load balancing and message forwarding. Experiments were conducted to determine optimal values, such as the ideal number of keys per bucket.",
                "Another notable project involved creating a concurrent flight booking app using Software Transactional Memory (STM). Execution times were again measured and statistics were used to improve speed.",
            ],

            bulletPoints: [
                "Analysing data for better optimisation and refining parameters",
                "Software Transactional Memory (STM)",
                "Parallelisation",
                "Concurrency",
                "Scalability techniques",
                "Servers",
            ],
            youtubeId: undefined,
            pictures: [parallel_1, parallel_2, parallel_3],
            icon: fileIcons.parallelism
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
            icon: fileIcons.constructs
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
            icon: fileIcons.constructs
        }
    },
    {
        id: 34,
        content: {
            title: 'Web Security',
            tags: ['React', 'E2EE', '2024'],
            description: [
                "Given a Slack-like chat application (server and client) that is highly insecure, the goal is to make it secure by implementing various web security measures and E2EE. The goal is to secure it by implementing various web security measures and end-to-end encryption (E2EE).",
                "Some of the security measures involved preventing script injection, activating and implementing security policies, establishing a secure connection with the server and removing possible NoSQL injections.",
                "End-to-end encryption is achieved by storing only encrypted chat messages in the server database and using symmetric and asymmetric keys for encryption on the client side. Each message is encrypted using a symmetric key, and only users on the same chat server have access to this key. If a user leaves the chat server, they will be unable to read future messages.",
            ],
            bulletPoints: [
                "End-to-end encryption",
                "Web security",
                "Implementing chat application with a server, database, and clients."
            ],
            youtubeId: undefined,
            pictures: [e2ee_1, e2ee_2],
            icon: fileIcons.security
        }
    },


]


interface Parameters {
    // For taggling max and min state
    setIconName: Dispatch<SetStateAction<StaticImageData>>;
    setTitleName: Dispatch<SetStateAction<string>>;
    projectsFolderOpenInit: boolean;
    maximizeState: boolean;
}




const FileExplorer = ({ setIconName, setTitleName, projectsFolderOpenInit, maximizeState }: Parameters) => {


    const handleClick = (id: number, icon: StaticImageData, title: string) => {
        setSelectedFile(id);
        setIconName(icon);
        setTitleName(title);
        console.log("Item clicked:", id);
        // Perform action: e.g., router.push(`/items/${id}`)
    };

    const generateFolderContent = (folderName: string) => {
        const folder = items.find(entry => entry.folderName === folderName);
        return (
            folder?.folderFiles.map((file, index) => (
                <li
                    key={file.id}
                    onClick={() => handleClick(file.id, getContent(file.id).icon, file.label)}
                    className={`${fileExplorerStyles.treeElement} clickable ${selectedFile === file.id ? `${fileExplorerStyles.fileActive}` : ''}`}
                >
                    <Image src={getContent(file.id).icon}
                        alt={`Popup icon`}
                        fill
                        priority={true}
                        className={`${fileExplorerStyles.icon}`}
                    />
                    <span>{file.label}</span>
                </li>
            ))
        );
    }

    const generateFolderSummary = (icon: StaticImageData, title: string) => {
        const folder = items.find(entry => entry.folderName === title);
        return (
            <summary className={`${fileExplorerStyles.treeElement} clickable`}
                onClick={() => folder && folder.id ? handleClick(folder.id, fileIcons.pictures, 'pictures') : null}>
                <Image src={icon}
                    alt={`Popup icon`}
                    fill
                    priority={true}
                    className={`${fileExplorerStyles.icon}`}
                />
                <span>{title}</span>
            </summary>
        );
    }

    const generateFolder = (openBoolInit: boolean, title: string, fileName: string, folderIcon?: StaticImageData) => {
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
        <div className={`${fileExplorerStyles.layout} ${maximizeState ? fileExplorerStyles.maximize : {}}`}>
            <ul className={`${fileExplorerStyles.tree} noSelect ${popupStyles.popupBodyFiles}`}>
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
                        <ul>
                            {generateFolder(!projectsFolderOpenInit, 'pictures', 'pictures', fileIcons.pictures)}
                        </ul>
                    </details>
                </li>
            </ul>
            {selectedFile == 0
                ? <ReadMeOverview content={projectContent} />
                :
                selectedFile >= 100
                    ? <PicturesOverview pics={photographyPics} setTitleName={setTitleName} setIconName={setIconName} picturesIcon={fileIcons.pictures} pictureIcon={fileIcons.picture} setSelectedFile={setSelectedFile} selectedFile={selectedFile} />
                    : <ProjectOverview content={projectContent} />}

        </div>

    );
}
export default FileExplorer;

