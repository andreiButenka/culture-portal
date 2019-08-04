import './team.css';

import React from 'react';

class Team extends React.PureComponent {
  render() {
    return (
        <div className="team">
            <div>                
                <div className="team__flipBox">
                    <div className="team__flipBox-inner">
                        <div className="team__flipBox-front">
                            <img src="https://cdn.discordapp.com/attachments/603511536203464710/607144345010700310/2016-08-27_10.10.40.jpg" alt="Dmitriy Garkusha"/>
                        </div>
                        <div className="team__flipBox-back">
                            <ul>
                                <li>video and modal component</li>
                                <li>map component</li>
                                <li>gallery component</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Dmitriy Garkusha</div>
                <a href="https://github.com/yoyq" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"/></a>
            </div>
            <div>
                <div className="team__flipBox">
                    <div className="team__flipBox-inner">
                        <div className="team__flipBox-front">
                            <img src="https://cdn.discordapp.com/attachments/603511536203464710/606880535930863617/IMG_20160823_182631.jpg" alt="Andrei Butenka"/>
                        </div>
                        <div className="team__flipBox-back">
                            <ul>
                                <li>create base structure of the project</li>
                                <li>writers base page</li>
                                <li>search widget to writers page</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Andrei Butenka</div>
                <a href="https://github.com/andreibutenka" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"/></a>
            </div>
            <div>
                <div className="team__flipBox">
                    <div className="team__flipBox-inner">
                        <div className="team__flipBox-front">
                        <img src="https://cdn.discordapp.com/attachments/603511536203464710/606835358944067584/ASI.jpg" alt="Siarhei Akulich"/>                        
                        </div>
                        <div className="team__flipBox-back">
                            <ul>
                                <li>create base structure of the project</li>
                                <li>writers base page</li>
                                <li>search widget to writers page</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Siarhei Akulich</div>
                <a href="https://github.com/asigithub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"/></a>
            </div>
            <div>
            <div className="team__flipBox">
                    <div className="team__flipBox-inner">
                        <div className="team__flipBox-front">
                        <img src="https://cdn.discordapp.com/attachments/603511536203464710/606835002545537024/avatar.jpg" alt="Aliaksandr Sitnikau"/>
                        </div>
                        <div className="team__flipBox-back">
                            <ul>
                                <li>Language switch component</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Aliaksandr Sitnikau</div>
                <a href="https://github.com/djspawnbrest" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"/></a>
            </div>
            <div>
                <div className="team__flipBox">
                    <div className="team__flipBox-inner">
                        <div className="team__flipBox-front">
                        <img src="https://pp.userapi.com/c840122/v840122243/3f5a7/SdetYKGPmC0.jpg" alt="Aleksandra Kovaliova"/>
                        </div>
                        <div className="team__flipBox-back">
                            <ul>
                                <li>main page</li>
                                <li>style</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Aleksandra Kovaliova</div>
                <a href="https://github.com/Toffifi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"/></a>
            </div>
        </div>

    );
  }
}
export default Team;