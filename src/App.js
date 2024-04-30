import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/category/resident-evil-4",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/322503446_IGDB-188x250.jpg",
    alt: "Imagem do jogo Resident Evil 4 Remake",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/category/buckshot-roulette",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/975920470_IGDB-188x250.jpg",
    alt: "Imagem do jogo BUCKSHOT ROULETTE",
  },
  {
    url: "https://www.twitch.tv/directory/category/little-nightmares",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/494131_IGDB-188x250.jpg",
    alt: "Imagem do jogo Little Nightmares",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },
  {
    url: "https://www.twitch.tv/rbiana",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/98628851-5748-4e6c-b396-8bc2401bc803-profile_image-150x150.png",
    alt: "Imagem de Rbiana",
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
    alt: "Imagem de Cellbit",
  },
  {
    url: "https://www.youtube.com/@rocketseat",
    imageUrl:
      "https://yt3.googleusercontent.com/6m9Q-yad3FXuGLlAkfcWmkaThNPwT2TGRyfpELFzFZb5BqBYwo_XV_ia_c-k6m6JwAx7m_4B=s176-c-k-c0x00ffffff-no-rj",
    alt: "Imagem de Rocketseat",
  },
  {
    url: "https://www.youtube.com/@manodeyvin",
    imageUrl:
      "https://yt3.googleusercontent.com/sqd29Za-ALVl9Dv7E01Jo54jDwnsp89zU8D80exJL6-T6qdQkchWazkVpOlyt47b4fZ0mpXp8A=s176-c-k-c0x00ffffff-no-rj",
    alt: "Imagem de Mano Deyvin",
  },
];

const socialListData = [
  {
    url: "https://www.instagram.com/_oliveiragusta",
    imageUrl: "/assets/instagram.svg",
    alt: "Logo do Instagram",
  },
  {
    url: "https://github.com/OliveiraGusta",
    imageUrl: "/assets/github.svg",
    alt: "Logo do Github",
  },
  {
    url: "https://github.com/OliveiraGusta",
    imageUrl: "/assets/linkedin.svg",
    alt: "Logo do Linkedin",
  },
];
export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gameListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
