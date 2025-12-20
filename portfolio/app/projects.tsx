
import { useState } from 'react';
import './css/global.css';
import projectsStyles from './css/projects.module.css';

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

    const generateFolderContent = (fileName: string) => {
        const folder = items.find(entry => entry.folderName === fileName);
        return (
            folder?.folderFiles.map((file) => (
                <li
                    key={file.id}
                    onClick={() => setSelectedFile(file.id)}
                    // 2. Conditionally apply the "selected" class
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




    // Readme is always selected
    const [selectedFile, setSelectedFile] = useState(0);

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
            <div className={`${projectsStyles.overview}`}>
                project view
            </div>
        </div>

    );
}
export default Projects;

