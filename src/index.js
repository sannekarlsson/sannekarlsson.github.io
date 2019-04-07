import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from './Icon';
import ICONS from './IconConstants';

function DevelopmentLink({ icon, url }) {
    return (
        <a href={url || icon.url}>
            <Icon className="development-icon"
                icon={icon.path}
                title={icon.title} />
        </a>
    );
}

class App extends React.Component {
    render() {
        return (
            <header>
                <div id="sk-logo">SK</div>

                <ul className="development-links">
                    <li>
                        <DevelopmentLink
                            icon={ICONS.CODEPEN}
                            url="https://codepen.io/sannekarlsson"
                        />
                    </li>
                    <li>
                        <DevelopmentLink
                            icon={ICONS.GITHUB}
                            url="https://github.com/sannekarlsson"
                        />
                    </li>
                    <li>
                        <DevelopmentLink
                            icon={ICONS.GLITCH}
                            url="https://glitch.com/@sannekarlsson"
                        />
                    </li>
                </ul>

            </header>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));