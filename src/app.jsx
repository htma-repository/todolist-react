const root = document.querySelector('#root');

const Tick = () => {
  const [count, setCount] = React.useState(1);
  const [login, setLogin] = React.useState(false);
  const [imageName, setImageName] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const Kali = () => setCount(count * 2);
  const Bagi = () => setCount(count / 2);

  const setLoginFunc = () => {
    setLogin(false);
  };

  React.useEffect(() => {
    // Using Fetch
    /*   fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => {
        const rick = res.results;
        setImage(rick[0].image);
        setName(rick[0].name);
      }); */

    // Using Async Await
    const rickMorty = async () => {
      try {
        const reqData = await fetch('https://rickandmortyapi.com/api/character');
        const response = await reqData.json();
        const resp = await response.results;
        setImageName(resp);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    rickMorty();
  }),
    [];

  const rickMorty = imageName.map((i) => {
    return (
      <li key={i.id} className="grid">
        <img src={i.image} alt="" style={{ borderRadius: '.5rem' }} />
        <h3 className="title">{i.name}</h3>
      </li>
    );
  });

  const bandsName = ['Radiohead', 'Blur', 'Coldplay', 'Trivium'];
  bandsName.push('Oasis', 'The Cure');
  bandsName.unshift('The Verve');
  const bands = bandsName.map((band) => (
    <li key={band}>
      <h3>{band}</h3>
    </li>
  ));

  if (login) {
    return (
      <div className="wrap w1">
        <h1 className="title">Anda Sudah Login</h1>
        <button className="btn" onClick={setLoginFunc}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <section>
      <div className="wrap w1">
        <div>
          <h1 className="title">Jam Sekarang</h1>
          <h2 className="date">{new Date().toLocaleTimeString()}</h2>
          <p className="parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur sint aliquid
            nulla <br />
            nihil quaerat modi, illo dolor animi, quos fuga eligendi facilis! Temporibus placeat
            labore iusto eveniet magni maxime!
          </p>
        </div>
        <button
          className="btn"
          onClick={() => {
            setLogin(true);
          }}
        >
          Login
        </button>
      </div>

      <div className="wrap w2">
        <button className="btn" onClick={Bagi}>
          /2
        </button>
        <h1 className="title">{count}</h1>
        <button className="btn" onClick={Kali}>
          X2
        </button>
      </div>

      <div className="wrap w1">
        <h1 className="title">List Band Name</h1>
        <ul>{bands}</ul>
      </div>

      <div className="wrap w1">
        <h1 className="title">Rick & Morty API</h1>
        <ul className="grid">{loading ? <h1 className="title">Loading</h1> : rickMorty}</ul>
      </div>
    </section>
  );
};

ReactDOM.render(<Tick />, root);
