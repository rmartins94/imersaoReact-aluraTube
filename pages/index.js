import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
const estiloHomePage = {  }

const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    // console.log(config.playlists)
    return (

        <>
        <CSSReset/>
        <div style={estiloHomePage} >
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
            <Header />
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />

        </div>

        </>

    )
}

export default HomePage



// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }
const SyledHeader = styled.div`
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        .user-info {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap:16px;

        }
    `
const StyledBanner =styled.div `
//background-color: blue;
background-image: url(${config.bg});
height: 230px;
background-repeat: no-repeat;
background-size: cover;
 `
function Header() {
    return (
        <SyledHeader>
        <StyledBanner/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.cargo}
                    </p>
                </div>

            </section>
        </SyledHeader>
    )
}

function Timeline({searchValue, ...props}) {
    // console.log("dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const videos = props.playlists[playlistsNames];
                console.log(playlistsNames);
                console.log(videos);

                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {videos.filter((video) =>{
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}