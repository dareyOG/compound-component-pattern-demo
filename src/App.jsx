import Counter from './Counter';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label>My flexible counter</Counter.Label>
        <Counter.Decrease icon="&#45;" />
        <Counter.Count />
        <Counter.Increase icon="&#43;" />
      </Counter>

      <div>
        <Counter>
          <Counter.Decrease icon="⬇️" />
          <Counter.Count />
          <Counter.Increase icon="⬆️" />
        </Counter>
      </div>
    </div>
  );
}
