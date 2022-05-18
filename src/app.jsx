const root = document.querySelector("#root");

const Tick = (props) => {
  const [count, setCount] = React.useState(1);
  const [login, setLogin] = React.useState(false);
  // useState RickMorty API
  const [imageName, setImageName] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // useState ToDo
  const [inputActivity, setInputActivity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState("");

  // React.useEffect(() => {
  //   // Using Fetch
  //   /*   fetch('https://rickandmortyapi.com/api/character')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const rick = res.results;
  //       setImage(rick[0].image);
  //       setName(rick[0].name);
  //     }); */

  //   // Using Async Await
  //   const rickMorty = async () => {
  //     try {
  //       const reqData = await fetch(
  //         'https://rickandmortyapi.com/api/character'
  //       );
  //       const response = await reqData.json();
  //       const resp = await response.results;
  //       setImageName(resp);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   rickMorty();
  // }),
  //   [];

  // const rickMorty = imageName.map((rick) => {
  //   return (
  //     <li key={rick.id} className="grid">
  //       <img src={rick.image} alt="" style={{ borderRadius: '.5rem' }} />
  //       <h3 className="title">{rick.name}</h3>
  //     </li>
  //   );
  // });

  // const setLoginFunc = () => setLogin(false);

  // if (login === true) {
  //   return (
  //     <div className="wrap w1">
  //       <h1 className="title">Anda Sudah Login</h1>
  //       <button className="btn" onClick={setLoginFunc}>
  //         Logout
  //       </button>
  //     </div>
  //   );
  // }

  // const Kali = () => setCount(count * 2);
  // const Bagi = () => setCount(count / 2);

  // const bandsName = ['Radiohead', 'Blur', 'Coldplay', 'Trivium'];
  // bandsName.push('Oasis', 'The Cure');
  // bandsName.unshift('The Verve');

  // const bandName = [
  //   {
  //     name: bandsName[1],
  //     songTitle: 'Creep',
  //   },
  //   {
  //     name: bandsName[2],
  //     songTitle: 'Coffe & TV',
  //   },
  //   {
  //     name: bandsName[3],
  //     songTitle: 'Yellow',
  //   },
  // ];
  // const bands = bandName.map((band) => {
  //   return (
  //     <li key={band.name}>
  //       <h3>
  //         {band.name} - {band.songTitle}
  //       </h3>
  //     </li>
  //   );
  // });

  const GenerateId = () => {
    return Date.now();
  };

  const InputChange = (e) => {
    return setInputActivity(e.target.value);
  };

  const DateChange = (e) => {
    return setDate(e.target.value);
  };

  const todoObj = {
    id: GenerateId(),
    inputActivity,
    date,
  };

  const OnSubmitInput = (e) => {
    e.preventDefault();

    if (!inputActivity) {
      return setMessage("Input Activity");
    }

    setMessage("");

    if (edit.id) {
      const updateTodo = {
        id: edit.id,
        inputActivity,
        date,
      };

      const indexTodo = todo.findIndex((todo) => {
        return todo.id === edit.id;
      });

      const newUpdateTodo = [...todo];
      newUpdateTodo[indexTodo] = updateTodo;
      setInputActivity("");
      setDate("");
      setTodo(newUpdateTodo);

      return cancelEditHandler();
    } else {
      setTodo([...todo, { ...todoObj }]);
      setInputActivity("");
      setDate("");
    }
  };

  const TodoDeleteHandler = (todoId) => {
    const todoFilter = todo.filter((t) => {
      return t.id != todoId;
    });

    confirm("apakah ingin delete activity?")
      ? setTodo(todoFilter)
      : setTodo(todo);

    if (edit.id) {
      cancelEditHandler();
    }
  };

  const TodoEditHandler = (todo) => {
    setInputActivity(todo.inputActivity);
    setDate(todo.date);
    setEdit(todo);
  };

  const cancelEditHandler = () => {
    setEdit({});
    setInputActivity("");
    setDate("");
  };

  return (
    <section>
      {/* <div className="wrap w1">
        <div>
          <h1 className="title">Jam Sekarang</h1>
          <h2 className="date">{new Date().toLocaleTimeString()}</h2>
          <p className="parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            tenetur sint aliquid nulla <br />
            nihil quaerat modi, illo dolor animi, quos fuga eligendi facilis!
            Temporibus placeat labore iusto eveniet magni maxime!
          </p>
        </div>
        <button className="btn" onClick={() => setLogin(true)}>
          Login
        </button>
      </div> */}

      {/* <div className="wrap w2">
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
      </div> */}

      <div className="wrap w1">
        <h1 className="title">Todo List</h1>

        {message && <h1 style={{ color: "red" }}>{message}</h1>}

        <form className=" grid" onSubmit={OnSubmitInput}>
          <input
            type="text"
            placeholder="Todo..."
            value={inputActivity}
            className="input"
            onChange={InputChange}
          />

          <input
            type="date"
            value={date}
            className="input"
            onChange={DateChange}
          />
          <button className="btn">{edit.id ? "Update" : "Submit"}</button>
          {edit.id && (
            <button className="btn" onClick={cancelEditHandler}>
              Cancel
            </button>
          )}
        </form>

        {todo.length > 0 ? (
          <ul>
            {todo.map((td) => {
              return (
                <li className="title wrap w1" key={td.id}>
                  <h2 className="title">{td.inputActivity}</h2>
                  <h4>{td.date}</h4>

                  <button
                    className="btn"
                    onClick={TodoDeleteHandler.bind(this, td.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn"
                    onClick={TodoEditHandler.bind(this, td)}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h1 className="title">activity empty</h1>
        )}
      </div>

      {/* <div className="wrap w1">
        <h1 className="title">Rick & Morty API</h1>
        <ul className="grid">
          {loading ? <h1 className="title">Loading...</h1> : rickMorty}
        </ul>
      </div> */}
    </section>
  );
};

ReactDOM.render(<Tick />, root);
