import background from '../assets/card.jpg';

export default function Home() {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 160px)', // - header - footer aukštis
    marginTop: '9px',
    marginBottom: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '1px 1px 4px black',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h1 className="mb-3 display-4">Sveiki atvykę į Home Banką</h1>
        <p className="mb-4 lead">Tvarkykite savo sąskaitas greitai ir patogiai</p>
      </div>
    </section>
  );
}

