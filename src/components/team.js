import './team.css';

import React from 'react';

class Team extends React.PureComponent {
  render() {
    return (
        <div className="team">
            <div>                
                <div class="team__flipBox">
                    <div class="team__flipBox-inner">
                        <div class="team__flipBox-front">
                            <img src="https://cdn.discordapp.com/attachments/603511536203464710/607144345010700310/2016-08-27_10.10.40.jpg"/>
                        </div>
                        <div class="team__flipBox-back">
                            <ul>
                                <li>Я всякое сделал</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>Dmitriy Garkusha</p>
                <a href="https://github.com/yoyq" target="_blank">ссылка</a>
            </div>
            <div>
                <div class="team__flipBox">
                    <div class="team__flipBox-inner">
                        <div class="team__flipBox-front">
                            <img src="https://cdn.discordapp.com/attachments/603511536203464710/606880535930863617/IMG_20160823_182631.jpg" />                        
                        </div>
                        <div class="team__flipBox-back">
                            <ul>
                                <li>Я всякое сделал</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Andrei Butenka</div>
                <a href="https://github.com/andreibutenka" target="_blank">ссылка</a>
            </div>
            <div>
                <div class="team__flipBox">
                    <div class="team__flipBox-inner">
                        <div class="team__flipBox-front">
                        <img src="https://cdn.discordapp.com/attachments/603511536203464710/606835358944067584/ASI.jpg" />                        
                        </div>
                        <div class="team__flipBox-back">
                            <ul>
                                <li>Я всякое сделал</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Siarhei Akulich</div>
                <a href="https://github.com/asigithub" target="_blank">ccskrf</a>
            </div>
            <div>
            <div class="team__flipBox">
                    <div class="team__flipBox-inner">
                        <div class="team__flipBox-front">
                        <img src="https://cdn.discordapp.com/attachments/603511536203464710/606835002545537024/avatar.jpg" />
                        </div>
                        <div class="team__flipBox-back">
                            <ul>
                                <li>Я всякое сделал</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Aliaksandr Sitnikau</div>
                <a href="https://github.com/djspawnbrest" target="_blank">ccskrf</a>
            </div>
            <div>
                <div class="team__flipBox">
                    <div class="team__flipBox-inner">
                        <div class="team__flipBox-front">
                        <img src="https://pp.userapi.com/c840122/v840122243/3f5a7/SdetYKGPmC0.jpg" />
                        </div>
                        <div class="team__flipBox-back">
                            <ul>
                                <li>Я всякое сделал</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>Aleksandra Kovaliova</div>
                <a href="https://github.com/Toffifi" target="_blank">ccskrf</a>
            </div>
        </div>

    );
  }
}
export default Team;