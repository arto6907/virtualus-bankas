import background from '../assets/card.jpg';

export default function Home() {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    color: 'white',
    textShadow: '1px 1px 4px black',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 className="mb-3 display-4">Sveiki atvykę į Home Banką</h1>
        <p className="mb-4 lead">Tvarkykite savo sąskaitas greitai ir patogiai</p>
      </div>
    </section>
  );
}
