
import './css/global.css';


const Projects = () => {
    return (
        <ul className="tree-view">
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
                        <li>EmFRP Compiler</li>
                        <li>C opptimizations</li>
                        <li>OPENCL</li>
                        <li>OPENGL</li>
                        <li>Extending Interpreter</li>
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
            </li>
        </ul>
    );
}
export default Projects;

