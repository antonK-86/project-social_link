import React from "react";
import cls from "./GameXO.module.css";

const Square = (props) => {
  //отрисовывает клетку в игре
  //debugger;
  let coin = false;
  if (props.winner) {
    const winLine = props.winner.winLine;
    if (winLine.includes(props.index)) coin = true;
  }

  return (
    <div
      className={cls.square + " " + (coin && cls.through)}
      onClick={() => {
        props.handleClick(props.index); //обработчик клика на выбранной клетке
      }}
    >
      {props.value} {/*значение v клеткe*/}
    </div>
  );
};

const Board = (props) => {
  const renderSquare = (i) => {
    let arr = [];
    for (let j = 0; j < i; j++) {
      arr.push(
        <Square
          key={j}
          value={props.squares[j]}
          index={j}
          handleClick={props.handleClick}
          winner={props.winner}
        />
      );
    }
    return arr;
  };

  return <div className={cls.border}>{renderSquare(9)}</div>;
};

class GameXO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        //массив хранит объекты со squares, после каждого хода создает новый объект
        {
          squares: Array(9).fill(null), // массив клеток, зануляем
        },
      ],
      isNextStep: true,
      stepNumber: 0,
    };
  }

  handleClick = (i) => {
    //копия массива history
    // если вернёмся назад yдалим всю «будущую» историю
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1]; //выбранный последний объект со squares
    const squares = current.squares.slice();
    if (squares[i] || choceWinnerArr(squares)) return;
    const nextStep = this.state.isNextStep ? "X" : "O";
    squares[i] = nextStep;
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      isNextStep: !this.state.isNextStep,
    });
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isNextStep: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = choceWinnerArr(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Выиграл " + winner.winner;
    } else if (this.state.stepNumber === 9) {
      status = "Paritet";
    } else {
      status = "Следующий ход: " + (this.state.isNextStep ? "X" : "O");
    }
    return (
      <div className={cls.game}>
        <div>{status}</div>
        <Board
          squares={current.squares}
          handleClick={this.handleClick}
          winner={winner}
        />
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function choceWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function choceWinnerArr(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      const winner = squares[a];
      const winLine = lines[i];
      return {
        winner,
        winLine,
      };
    }
  }
  return null;
}

export default GameXO;
