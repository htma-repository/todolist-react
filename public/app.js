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
  }), [];
  const rickMorty = imageName.map(i => {
    return /*#__PURE__*/React.createElement("li", {
      key: i.id,
      className: "grid"
    }, /*#__PURE__*/React.createElement("img", {
      src: i.image,
      alt: "",
      style: {
        borderRadius: '.5rem'
      }
    }), /*#__PURE__*/React.createElement("h3", {
      className: "title"
    }, i.name));
  });
  const bandsName = ['Radiohead', 'Blur', 'Coldplay', 'Trivium'];
  bandsName.push('Oasis', 'The Cure');
  bandsName.unshift('The Verve');
  const bands = bandsName.map(band => /*#__PURE__*/React.createElement("li", {
    key: band
  }, /*#__PURE__*/React.createElement("h3", null, band)));

  if (login) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wrap w1"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "title"
    }, "Anda Sudah Login"), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: setLoginFunc
    }, "Logout"));
  }

  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap w1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", {
    className: "date"
  }, new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("p", {
    className: "parag"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur sint aliquid nulla ", /*#__PURE__*/React.createElement("br", null), "nihil quaerat modi, illo dolor animi, quos fuga eligendi facilis! Temporibus placeat labore iusto eveniet magni maxime!")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => {
      setLogin(true);
    }
  }, "Login")), /*#__PURE__*/React.createElement("div", {
    className: "wrap w2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: Bagi
  }, "/2"), /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, count), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: Kali
  }, "X2")), /*#__PURE__*/React.createElement("div", {
    className: "wrap w1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "List Band Name"), /*#__PURE__*/React.createElement("ul", null, bands)), /*#__PURE__*/React.createElement("div", {
    className: "wrap w1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Rick & Morty API"), /*#__PURE__*/React.createElement("ul", {
    className: "grid"
  }, loading ? /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Loading") : rickMorty)));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Tick, null), root);