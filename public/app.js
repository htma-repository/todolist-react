const root = document.querySelector('#root');

const Tick = (props) => {
  const [count, setCount] = React.useState(1);
  const [login, setLogin] = React.useState(false); // useState RickMorty API

  const [imageName, setImageName] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // useState ToDo

  const [inputActivity, setInputActivity] = React.useState('');
  const [date, setDate] = React.useState('');
  const [todo, setTodo] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState(''); // React.useEffect(() => {
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
      return setMessage('Input Activity');
    }

    setMessage('');

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
      setInputActivity('');
      setDate('');
      setTodo(newUpdateTodo);
      return cancelEditHandler();
    } else {
      setTodo([...todo, { ...todoObj }]);
      setInputActivity('');
      setDate('');
    }
  };

  const TodoDeleteHandler = (todoId) => {
    const todoFilter = todo.filter((t) => {
      return t.id != todoId;
    });
    confirm('apakah ingin delete activity?')
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
    setInputActivity('');
    setDate('');
  };

  return /*#__PURE__*/ React.createElement(
    'section',
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'wrap w1',
      },
      /*#__PURE__*/ React.createElement(
        'h1',
        {
          className: 'title',
        },
        'Todo List'
      ),
      message &&
        /*#__PURE__*/ React.createElement(
          'h1',
          {
            style: {
              color: 'red',
            },
          },
          message
        ),
      /*#__PURE__*/ React.createElement(
        'form',
        {
          className: ' grid',
          onSubmit: OnSubmitInput,
        },
        /*#__PURE__*/ React.createElement('input', {
          type: 'text',
          placeholder: 'Todo...',
          value: inputActivity,
          className: 'input',
          onChange: InputChange,
        }),
        /*#__PURE__*/ React.createElement('input', {
          type: 'date',
          value: date,
          className: 'input',
          onChange: DateChange,
        }),
        /*#__PURE__*/ React.createElement(
          'button',
          {
            className: 'btn',
          },
          edit.id ? 'Update' : 'Submit'
        ),
        edit.id &&
          /*#__PURE__*/ React.createElement(
            'button',
            {
              className: 'btn',
              onClick: cancelEditHandler,
            },
            'Cancel'
          )
      ),
      todo.length > 0
        ? /*#__PURE__*/ React.createElement(
            'ul',
            null,
            todo.map((td) => {
              return /*#__PURE__*/ React.createElement(
                'li',
                {
                  className: 'title wrap w1',
                  key: td.id,
                },
                /*#__PURE__*/ React.createElement(
                  'h2',
                  {
                    className: 'title',
                  },
                  td.inputActivity
                ),
                /*#__PURE__*/ React.createElement('h4', null, td.date),
                /*#__PURE__*/ React.createElement(
                  'button',
                  {
                    className: 'btn',
                    onClick: TodoDeleteHandler.bind(this, td.id),
                  },
                  'Delete'
                ),
                /*#__PURE__*/ React.createElement(
                  'button',
                  {
                    className: 'btn',
                    onClick: TodoEditHandler.bind(this, td),
                  },
                  'Edit'
                )
              );
            })
          )
        : /*#__PURE__*/ React.createElement(
            'h1',
            {
              className: 'title',
            },
            'activity empty'
          )
    )
  );
};

ReactDOM.render(/*#__PURE__*/ React.createElement(Tick, null), root);
