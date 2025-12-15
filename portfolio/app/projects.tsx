
import globalStyles from './globals.module.css';
import { Dispatch, SetStateAction } from "react";
import './global.css';


const Projects = () => {
    return (
        <section className="tabs">
            <menu role="tablist" aria-label="Sample Tabs">
                <button role="tab" aria-selected="true" aria-controls="tab-A">Tab A</button>
                <button role="tab" aria-controls="tab-B">Tab B</button>
                <button role="tab" aria-controls="tab-C">Tab C</button>
            </menu>
            <article role="tabpanel" id="tab-A">
                <h3>Tab Content</h3>
                <p>
                    You create the tabs, you would use a <code>menu role="tablist"</code> element then for the tab titles you use a <code>button</code> with the <code>aria-controls</code> parameter set to match the relative <code>role="tabpanel"</code>'s element.
                </p>
                <p>
                    Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role" target="_blank">MDN Web docs - ARIA: tab role</a>
                </p>
            </article>
            <article role="tabpanel" hidden id="tab-B">
                xd
            </article>
            <article role="tabpanel" hidden id="tab-C">
                <h3>Tab 3</h3>
                <p>Lorem Ipsum Dolor Sit</p>
            </article>
        </section>
    );
}
export default Projects;

