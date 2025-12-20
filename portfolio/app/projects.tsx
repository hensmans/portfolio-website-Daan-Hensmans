
import './css/global.css';
import projectsStyles from './css/projects.module.css';

const Projects = () => {
    return (
        <div className={`${projectsStyles.layout}`}>
            <ul className={`tree-view ${projectsStyles.projectsTree} ${projectsStyles.projectsTreeSummary}`}>
                <li>PROJECTS</li>
                <li>
                    <details open>
                        <summary>Games</summary>
                        <ul>
                            <li>Dr Mario</li>
                            <li>Worm</li>
                            <li>Desert Explorer</li>
                            <li>Dr Mario</li>
                            <li>Train App</li>
                            <li>Pixel Simulator</li>
                        </ul>
                    </details>
                    <details open>
                        <summary>Low level</summary>
                        <ul>
                            <li>C opptimizations</li>
                            <li>OPENCL</li>
                            <li>OPENGL</li>
                            <li>EmFRP Compiler</li>
                            <li>Interpreter</li>
                        </ul>
                    </details>
                    <details open>
                        <summary>Constructs</summary>
                        <ul>
                            <li>Parallellism</li>
                            <li>Database</li>
                            <li>Multicore</li>
                            <li>Database</li>
                            <li>Web Security</li>
                        </ul>
                    </details>
                    <details open>
                        <summary>Creativity</summary>
                        <ul>This site</ul>
                        <ul>YouTube</ul>
                        <ul>Photography</ul>
                    </details>
                </li>
            </ul>

        </div>

    );
}
export default Projects;

